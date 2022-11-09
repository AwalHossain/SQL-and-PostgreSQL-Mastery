

-- Show the name, dept, and price of products that are more expensive than all products in the 'industrial' dept

SELECT name, price, department
FROM products
WHERE price > ALL (
    SELECT price from products where department ='Industrial'
);
