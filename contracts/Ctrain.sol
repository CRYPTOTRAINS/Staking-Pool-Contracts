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

    IERC20 public tokenAddress;
    address public reserveAddress;

    struct Train {
        uint256 id;
        uint8 level;
        uint8 rarity;
        bool fuel;
        uint8 status;
    }
    
    Train[] public trains;

    uint256 COUNTER;
    uint256 private _startOfPresale;

    constructor(address _token, address _reserve)ERC721("Ctrain", "CTR"){
        tokenAddress = IERC20(_token);
        reserveAddress = _reserve;
        _startOfPresale = block.timestamp;
    }    
        
    function create(uint256 _mintAmount, string memory tokenURI) public whenNotPaused {
        require(_mintAmount > 0, "Minimum number of mintable token is 1");
        require(_mintAmount <= 5, "Maximum number of mintable token is 5");

        uint256 timePresale = _startOfPresale + 3600;
        uint256 timePublicSale = _startOfPresale + 7200;
        uint256 _price;
        if(block.timestamp <=  timePresale) {
            _price = 420*10e18;
        } else if (block.timestamp > timePresale && block.timestamp <= timePublicSale) {
            _price = 510*10e18;
        } else {
            _price = 600*10e18;
        }
        
        uint256 _mintingPrice = _price * _mintAmount;
        uint256 ownerMintedCount = balanceOf(msg.sender);
        require(ownerMintedCount + _mintAmount <= nftPerAddressLimit, "max NFT per address exceeded");
        tokenAddress.transferFrom(msg.sender, reserveAddress, _mintingPrice);
        for (uint256 i = 1; i <= _mintAmount; i++) {
            uint8 randRarity = uint8(_createRandomNum(100));
            Train memory newTrain = Train(COUNTER, 1, randRarity, false, 1);
            trains.push(newTrain);
            uint256 newItemId = _tokenIds.current();
            _mint(msg.sender, newItemId);
            string memory uniqueURI = string(abi.encodePacked(tokenURI, i));
            _setTokenURI(newItemId, uniqueURI);
            _tokenIds.increment();
        }
    }

    // Getters
    function getTrains() public view returns (Train[] memory) {
        return trains;
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