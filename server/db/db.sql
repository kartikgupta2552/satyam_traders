
-- **************** Table Item_Category ****************
CREATE TABLE ItemCategory
(
    ItemCategoryId INT PRIMARY KEY AUTO_INCREMENT,
    ItemCategoryName VARCHAR(20)
);


-- **************** Table Items ****************
CREATE TABLE Items
(
    ItemId INT PRIMARY KEY AUTO_INCREMENT,
    ItemName VARCHAR(30),
    ItemPrice DECIMAL(10,2),
    ItemCategoryId INT,
    FOREIGN KEY (ItemCategoryId) REFERENCES ItemCategory(ItemCategoryId)
);

-- **************** Table Orders ****************
CREATE TABLE Orders
(
    OrderId INT PRIMARY KEY AUTO_INCREMENT,
    CustomerName VARCHAR(30),
    CustomerPhone VARCHAR(15),
    OrderTime DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- **************** Table Order_Items ****************
CREATE TABLE OrderItems
(
    OrderItemId INT PRIMARY KEY AUTO_INCREMENT,
    OrderId INT,
    ItemId INT,
    Quantity VARCHAR(20),
    FOREIGN KEY (OrderId) REFERENCES Orders(OrderId),
    FOREIGN KEY (ItemId) REFERENCES Items(ItemId)
);