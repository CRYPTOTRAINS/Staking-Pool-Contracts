// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract MarketPlace is ReentrancyGuard {
  using Counters for Counters.Counter;
  Counters.Counter private _itemIds;
  Counters.Counter private _itemsSold;

  using SafeERC20 for IERC20;

  IERC20 public tokenAddress;
  address payable owner;

  constructor(address _token) {
    owner = payable(msg.sender);
    tokenAddress = IERC20(_token);
  }

  struct MarketItem {
    uint itemId;
    address nftContract;
    uint256 tokenId;
    address payable seller;
    address payable owner;
    uint256 price;
    bool sold;
  }

  mapping(uint256 => MarketItem) private idToMarketItem;

  event MarketItemCreated (
    uint indexed itemId,
    address indexed nftContract,
    uint256 indexed tokenId,
    address seller,
    address owner,
    uint256 price,
    bool sold
  );

  function sell(address nftContract, uint256 tokenId, uint256 price) public payable nonReentrant {
    require(price > 0, "Price must be at least 1 wei");
    
    uint256 itemId = _itemIds.current();
  
    idToMarketItem[itemId] =  MarketItem(
      itemId,
      nftContract,
      tokenId,
      payable(msg.sender),
      payable(address(0)),
      price,
      false
    );

    IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

    emit MarketItemCreated(
      itemId,
      nftContract,
      tokenId,
      msg.sender,
      address(0),
      price,
      false
    );
  }

 
  function buy(address nftContract, uint256 tokenId) public payable nonReentrant {
  uint256 price = idToMarketItem[tokenId].price;
   
    address seller = idToMarketItem[tokenId].seller;
    
    uint256 CtrainFee = (price * 15)/100;
    uint256 sellerFee = price - CtrainFee;
    tokenAddress.transferFrom(msg.sender, address(this), CtrainFee);
    tokenAddress.transferFrom(msg.sender, seller, sellerFee);

    IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);
    idToMarketItem[tokenId].owner = payable(msg.sender);
    idToMarketItem[tokenId].sold = true;
    _itemsSold.increment();
    
  }

  function fetchPrice(uint256 tokenId) public view returns(uint256) {
    uint256 cost = idToMarketItem[tokenId].price;
    return cost;
  }

  function TokenWithdraw(uint256 _amount) external {
      require(msg.sender == owner, "You're unauthorized. Only owner!");
      tokenAddress.transfer(owner, _amount);
  }

  function withdrawBNB() external payable {
        require(msg.sender == owner, "You're unauthorized. Only owner!");
        address payable _reserve = payable(owner);
        _reserve.transfer(address(this).balance);
  }

}