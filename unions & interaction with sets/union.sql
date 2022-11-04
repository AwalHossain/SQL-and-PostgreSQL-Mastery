-- Find the 4 products with the highest price and 4 products with the highest price/weight ratio
-- union keyword merge two query at the same time and show result all-together & remove duplicate

(SELECT *
FROM products
ORDER BY price DESC 
LIMIT 4)
UNION ALL
(SELECT * FROM products 
ORDER BY price/weight DESC
LIMIT 4)


