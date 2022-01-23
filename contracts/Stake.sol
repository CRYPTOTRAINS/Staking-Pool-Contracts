// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StakeToken is ReentrancyGuard, Pausable, Ownable {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    Stakeholder[] internal stakeholders;
    
    IERC20 public rewardsToken;
    IERC20 public stakingToken;

    // uint256 public rewardsDuration = 12 days;
   uint256 public rewardsDuration = 2 minutes;
    uint256 internal rewardPerCycle = 32876; // Equivalence of 100% APY (3.3%) for 12 days.
    uint256 private _totalSupply;

    address private _owner;

    mapping(address => uint256) private _balances;
    mapping(address => uint256) internal stakes;

    struct Stake{
        address user;
        uint256 amount;
        uint256 since;
        uint256 claimable;
    }

    struct Stakeholder{
        address user;
        Stake[] address_stakes;
    }

    constructor(address _rewardsToken, address _stakingToken) {
        _owner = msg.sender;
        rewardsToken = IERC20(_rewardsToken);
        stakingToken = IERC20(_stakingToken);
        stakeholders.push();
    }

    // =================== VIEWS ===========================
    function totalSupply() external view returns (uint256) {
        return _totalSupply;
    }

    function stakingBalance(address account) external view returns (uint256) {
        return _balances[account];
    }

    //==================== MUTATIVE ========================
    function _addStakeholder(address staker) internal returns (uint256){
        stakeholders.push();
        uint256 userIndex = stakeholders.length - 1;
        stakeholders[userIndex].user = staker;
        stakes[staker] = userIndex;
        return userIndex; 
    }
    
    function stake(uint256 amount) external nonReentrant whenNotPaused {
        require(amount >= 50, "Cannot stake below 50");
        require(amount <= 500000, "Cannot stake more than 500000");
        _totalSupply = _totalSupply.add(amount);
        _balances[msg.sender] = _balances[msg.sender].add(amount);

        // _stake
        uint256 index = stakes[msg.sender];
        uint256 timestamp = block.timestamp;
        if(index == 0){
            index = _addStakeholder(msg.sender);
        }
        stakeholders[index].address_stakes.push(Stake(msg.sender, amount, timestamp, 0));

        stakingToken.safeTransferFrom(msg.sender, address(this), amount);
        emit Staked(msg.sender, amount);
    }

    function calculateStakeReward(Stake memory _current_stake) internal view returns(uint256){
        return (((block.timestamp - _current_stake.since) / rewardsDuration) * _current_stake.amount)/rewardPerCycle;
    }

    function withdrawStake(uint256 amount, uint256 index) public returns(uint256){
        require(amount > 0, "Cannot withdraw 0");
        _totalSupply = _totalSupply.sub(amount);
        _balances[msg.sender] = _balances[msg.sender].sub(amount);

        uint256 user_index = stakes[msg.sender];
        Stake memory current_stake = stakeholders[user_index].address_stakes[index];
        require(current_stake.amount >= amount, "Staking: Cannot withdraw more than you have staked");
        
        require (block.timestamp >= (current_stake.since + rewardsDuration), "Token locked. Wait till after rewards duration for this pool.");
         uint256 reward = calculateStakeReward(current_stake);
          
         current_stake.amount = current_stake.amount - amount;
         if(current_stake.amount == 0){
             delete stakeholders[user_index].address_stakes[index];
         }else {
             stakeholders[user_index].address_stakes[index].amount = current_stake.amount;    
         }
        uint totalPayable = amount+reward;
        stakingToken.safeTransfer(msg.sender, totalPayable);
        emit Withdrawn(msg.sender, amount);

        return amount+reward;
     }

    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
}
