// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title ItemMarketplace
 * @notice A basic marketplace for buying and selling single items.
 * @dev This contract allows sellers to list items and buyers to purchase them. Each item can only be purchased once.
 */
contract ItemMarketplace {
    // ============ Data Structures ============
    struct ItemListing {
        uint256 id;
        string name;
        string description;
        uint256 price; // Price in wei
        address payable seller;
        bool isAvailable;
    }

    // ============ State Variables ============
    uint256 public nextItemId;
    mapping(uint256 => ItemListing) public items;

    // ============ Events ============
    event ItemListed(
        uint256 indexed id,
        address indexed seller,
        string name,
        uint256 price
    );

    event ItemPurchased(
        uint256 indexed id,
        address indexed buyer,
        uint256 price
    );

    // ============ Errors ============
    error ItemNotFound();
    error IncorrectPayment();
    error ItemNotAvailable();

    // ============ Functions ============

    /**
     * @notice Allows a seller to list an item for sale.
     * @param _name The name of the item.
     * @param _description A description of the item.
     * @param _price The price in wei.
     */
    function listItem(string memory _name, string memory _description, uint256 _price) external {
        require(_price > 0, "Price must be greater than zero");

        uint256 itemId = nextItemId;
        items[itemId] = ItemListing(itemId, _name, _description, _price, payable(msg.sender), true);

        emit ItemListed(itemId, msg.sender, _name, _price);
        nextItemId++;
    }

    /**
     * @notice Allows a buyer to purchase a listed item.
     * @param _itemId The ID of the item listing to purchase.
     */
    function buyItem(uint256 _itemId) external payable {
        if (_itemId >= nextItemId) revert ItemNotFound();

        ItemListing storage item = items[_itemId];

        if (!item.isAvailable) revert ItemNotAvailable();

        if (msg.value != item.price) revert IncorrectPayment();

        // Update state
        item.isAvailable = false;

        // Transfer funds to the seller
        (bool success, ) = item.seller.call{value: item.price}("");
        require(success, "Transfer failed");

        emit ItemPurchased(_itemId, msg.sender, item.price);
    }
}