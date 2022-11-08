

--  > sign only compare with single values which is coming from avg price


SELECT name, price
FROM products 
WHERE price > (SELECT AVG(price) as avg_price
FROM products
)