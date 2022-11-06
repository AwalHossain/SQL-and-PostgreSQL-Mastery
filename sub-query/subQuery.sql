-- List the name and price of all products that are more expensive than all products in the toys department

-- query with parenthesis() indicate sub-query

SELECT name, price 
FROM products
WHERE price >(
    SELECT MAX(price)
    FROM products 
    WHERE department = 'Toys'
);


