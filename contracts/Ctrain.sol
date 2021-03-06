//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";



contract Ctrain is ERC721URIStorage, Pausable {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address contractAddress;

    using SafeERC20 for IERC20;

    address private owner;

    uint256 private nftPerAddressLimit = 10;
      uint256 private nftPresaleLimit = 5;
    uint256 private _totalPresaleSupply = 3000;

    IERC20 public tokenAddress;
    address public reserveAddress;

    address[] private whitelistedAddresses;

    mapping(address => uint256) private addressMintedBalance;

    struct Train {
        uint256 id;
        uint8 level;
        uint8 rarity;
        bool fuel;
        uint8 acceleration;
        uint8 speed;
        uint8 brakes;
        uint8 loads;
        uint256 price;
    }
    
    Train[] public trains;

    uint256 private COUNTER;

    uint256 private _startOfPresale;

    event RestrictedTransfer(
        address _sender,
        address _receiver,
        uint256 _id
    );

    constructor(address marketplaceAddress, address _token, address _reserve) ERC721("ctrain", "ctr") {
        owner = msg.sender;
        contractAddress = marketplaceAddress;
        tokenAddress = IERC20(_token);
        reserveAddress = _reserve;
        _startOfPresale = block.timestamp;
        
    }

    function createToken() public payable {
        require(_totalPresaleSupply >= 1, "Token is sold out");
        uint256 balance = balanceOf(msg.sender);
        require(balance <= nftPerAddressLimit, "You've reached maximum allowed limit per address");
        uint256 timePresale = _startOfPresale + 3600;
        uint256 timePublicSale = _startOfPresale + 7200;
        uint256 _price;
        if(block.timestamp <=  timePresale) {
            require(isWhitelisted(msg.sender), "You are not whitelisted for presale");
             _totalPresaleSupply -= 1;
            _price = 420000000000000000000;
        } else if (block.timestamp > timePresale && block.timestamp <= timePublicSale) {
            require(isWhitelisted(msg.sender), " You are not a whitelisted for presale");
             _totalPresaleSupply -= 1;
            _price = 510000000000000000000;
        } else {
             _price = 600000000000000000000;
        }

        uint256 fee = 5400000000000000;
        require(msg.value == fee, "You must pay the required fee");
        payable(reserveAddress).transfer(fee);
        
        tokenAddress.transferFrom(msg.sender, address(this), _price);
            
        uint8 randRarity = uint8(_createRandomRarity(100));
        uint8 acceleration = uint8(_createRandomAcceleration(100));
        uint8 speed = uint8(_createRandomRarity(110));
        uint8 brakes = uint8(_createRandomRarity(100));
        uint8 loads = uint8(_createRandomAcceleration(110));

        uint256 ownerMintedCount = addressMintedBalance[msg.sender];
        require(ownerMintedCount + 1 <= nftPresaleLimit, "max NFT per address exceeded");
        uint256 newItemId = _tokenIds.current();
        Train memory newTrain = Train(newItemId, 1, randRarity, false, acceleration, speed, brakes, loads, _price);
        trains.push(newTrain);
            
        _mint(msg.sender, newItemId);
        addressMintedBalance[msg.sender]++;
        setApprovalForAll(contractAddress, true);
        _tokenIds.increment();
    }

    function whitelistUsers(address[] calldata _users) public {
       require(msg.sender == owner, "You're unauthorized. Only owner!");
        delete whitelistedAddresses;
        whitelistedAddresses = _users;
    }

    function TokenWithdraw(uint256 _amount) external {
      require(msg.sender == owner, "You're unauthorized. Only owner!");
      tokenAddress.transfer(owner, _amount);
    }

    // Getters
    function getTrains() public view returns (Train[] memory) {
        return trains;
    }

    function totalPresaleSupply() public view returns(uint256) {
        return _totalPresaleSupply;
    }

     function isWhitelisted(address _user) public view returns (bool) {
        for (uint i = 0; i < whitelistedAddresses.length; i++) {
            if (whitelistedAddresses[i] == _user) {
                    return true;
                }
            }
            return false;
    }

    function allWhitelistedAddresses() public view returns(address[] memory) {
        return whitelistedAddresses;
    }

    function getOwnerTrains(address _owner) public view returns (Train[] memory) {
        Train[] memory result = new Train[](balanceOf(_owner));
        uint256 counter = 0;
            for (uint256 i = 0; i < trains.length; i++) {
                if (ownerOf(i) == _owner) {
                    result[counter] = trains[i];
                    counter++;
                }
            }
        return result;
    }

    // Helpers
   
    function setNftPerAddressLimit(uint256 _limit) public {
        require(msg.sender == owner, "You're unauthorized. Only owner!");
        nftPerAddressLimit = _limit;
    }

    function pause() public {
        require(msg.sender == owner, "You're unauthorized. Only owner!");
        _pause();
    }

    function unpause() public {
        require(msg.sender == owner, "You're unauthorized. Only owner!");
        _unpause();
    }

    function _createRandomRarity(uint256 _mod) internal view returns (uint256) {
        uint256 randomNum = uint256(
        keccak256(abi.encodePacked(block.timestamp, msg.sender))
        );
        return randomNum % _mod;
    }

    function _createRandomAcceleration(uint256 _mod) internal view returns (uint256) {
        uint256 randomNum = uint256(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
        return randomNum % _mod;
    }

    function teamMint() public {
        require(msg.sender == owner, "You're unauthorized. Only owner!");
        uint8 randRarity = uint8(_createRandomRarity(100));
        uint8 acceleration = uint8(_createRandomAcceleration(100));
        uint8 speed = uint8(_createRandomRarity(110));
        uint8 brakes = uint8(_createRandomRarity(100));
        uint8 loads = uint8(_createRandomAcceleration(110));

        uint256 ownerMintedCount = addressMintedBalance[msg.sender];
        require(ownerMintedCount + 1 <= 100, "max teamMint exceeded");

        uint256 _price;

        uint256 newItemId = _tokenIds.current();
        Train memory newTrain = Train(newItemId, 1, randRarity, false, acceleration, speed, brakes, loads, _price);
        trains.push(newTrain);
        _mint(msg.sender, newItemId);
        addressMintedBalance[msg.sender]++;
        setApprovalForAll(contractAddress, true);
        _tokenIds.increment();
    }
}
