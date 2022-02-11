//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Ctrain is ERC721URIStorage, Pausable, Ownable {
    using SafeERC20 for IERC20;

    using Counters for Counters.Counter;
   
    Counters.Counter private _tokenIds;
     
    uint256 public nftPerAddressLimit = 10;
    uint256 private _totalPresaleSupply = 3000;

    IERC20 public tokenAddress;
    address public reserveAddress;

    address[] private whitelistedAddresses;

    struct Train {
        uint256 id;
        uint8 level;
        uint8 rarity;
        bool fuel;
        uint8 acceleration;
        uint8 speed;
        uint8 brakes;
        uint8 loads;
    }
    
    Train[] public trains;

    uint256 COUNTER;
    uint256 private _startOfPresale;

    event RestrictedTransfer(
        address _sender,
        address _receiver,
        uint256 _id
    );

    constructor(address _token, address _reserve)ERC721("Ctrain", "CTR"){
        tokenAddress = IERC20(_token);
        reserveAddress = _reserve;
        _startOfPresale = block.timestamp;
    }
    
    function create(uint256 _mintAmount) public payable whenNotPaused {
        require(_mintAmount > 0, "Minimum number of mintable token is 1");
        require(_mintAmount <= 5, "Maximum number of mintable token is 5");

        uint256 timePresale = _startOfPresale + 3600;
        uint256 timePublicSale = _startOfPresale + 7200;
        uint256 _price;
        if(block.timestamp <=  timePresale) {
            require(isWhitelisted(msg.sender), "You are not a whitelisted for presale");
            require(_mintAmount <= _totalPresaleSupply, "Presale token is sold out");
             _totalPresaleSupply -= _mintAmount;
            _price = 420000000000000000000;
        } else if (block.timestamp > timePresale && block.timestamp <= timePublicSale) {
            require(isWhitelisted(msg.sender), "You are not a whitelisted for presale");
            require(_mintAmount <= _totalPresaleSupply, "Presale token is sold out");
             _totalPresaleSupply -= _mintAmount;
            _price = 510000000000000000000;
        } else {
            _price = 600000000000000000000;
        }
        
        uint256 _mintingPrice = _price * _mintAmount;
        uint256 ownerMintedCount = balanceOf(msg.sender);
        require(ownerMintedCount + _mintAmount <= nftPerAddressLimit, "max NFT per address exceeded");
        tokenAddress.transferFrom(msg.sender, reserveAddress, _mintingPrice);
        uint256 fee = _mintAmount * 5300000000000000;
        require(msg.value == fee, "Please send along $2 for each NFT to complete minting");
    
        for (uint256 i = 1; i <= _mintAmount; i++) {
            uint8 randRarity = uint8(_createRandomNum(100));
            uint8 acceleration = uint8(_createRandomNum(100));
            uint8 speed = uint8(_createRandomNum(100));
            uint8 brakes = uint8(_createRandomNum(100));
            uint8 loads = uint8(_createRandomNum(100));
            Train memory newTrain = Train(COUNTER, 1, randRarity, false, acceleration, speed, brakes, loads);
            trains.push(newTrain);
            uint256 newItemId = _tokenIds.current();
            _mint(msg.sender, newItemId);
            _tokenIds.increment();
        }
    }

    function whitelistUsers(address[] calldata _users) public onlyOwner {
        delete whitelistedAddresses;
        whitelistedAddresses = _users;
    }

    function withdraw() external payable onlyOwner {
        address payable _reserve = payable(reserveAddress);
        _reserve.transfer(address(this).balance);
    }

    function transferFrom(address _from, address _to, uint256 _tokenId) public override onlyOwner {
        require(msg.sender == ownerOf(_tokenId), "You're not the owner of this token");
        _transfer(_from, _to, _tokenId);
        emit RestrictedTransfer(_from, _to,  _tokenId);
    }

    function safeTransferFrom(address _from, address _to, uint256 _tokenId) public override onlyOwner {
        require(msg.sender == ownerOf(_tokenId), "You're not the owner of this token");
        safeTransferFrom(_from, _to, _tokenId, "");
        emit RestrictedTransfer(_from, _to,  _tokenId);
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
    function _createRandomNum(uint256 _mod) internal view returns (uint256) {
        uint256 randomNum = uint256(
        keccak256(abi.encodePacked(block.timestamp, msg.sender))
        );
        return randomNum % _mod;
    }
   
    function setNftPerAddressLimit(uint256 _limit) public onlyOwner {
        nftPerAddressLimit = _limit;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

}

/* ["0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db", 
"0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB", 
"0x617F2E2fD72FD9D5503197092aC168c91465E7f2"]
*/