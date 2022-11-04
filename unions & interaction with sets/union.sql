-- Find the 4 products with the highest price and 4 products with the highest price/weight ratio


(SELECT *
FROM products
ORDER BY price DESC 
LIMIT 4)
UNION ALL
(SELECT * FROM products 
ORDER BY price/weight DESC
LIMIT 4)


