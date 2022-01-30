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

    uint256 private _price = 600000000000000000000;
    
    bool public presale = true;
     
    uint256 public nftPerAddressLimit = 10;

    IERC20 public tokenAddress;
    address public reserveAddress;
     
    constructor(address _token, address _reserve)ERC721("Ctrain", "CTR"){
        tokenAddress = IERC20(_token);
        reserveAddress = _reserve;
    }        
            

    function getMintingPrice(uint256 _mintAmount) public view returns (uint256) {
        return  _mintAmount *_price;
    }

    function createToken(uint256 _mintAmount) public whenNotPaused {
        require(_mintAmount > 0, "Minimum number of mintable token is 1");
        require(_mintAmount <= 5, "Maximum number of mintable token is 5");
        if(presale == true) {
            _price = 420000000000000000000; // 30% presale discount
        } else {
            _price = 510000000000000000000; // 15% public sale
        }
        uint256 _mintingPrice = _price * _mintAmount;
        uint256 ownerMintedCount = balanceOf(msg.sender);
        require(ownerMintedCount + _mintAmount <= nftPerAddressLimit, "max NFT per address exceeded");

        for (uint256 i = 1; i <= _mintAmount; i++) {
            uint256 newItemId = _tokenIds.current();
            tokenAddress.transferFrom(msg.sender, reserveAddress, _mintingPrice);
            _mint(msg.sender, newItemId);
            _tokenIds.increment();
        }
    }

    function endPresale() public onlyOwner {
        presale = false;
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