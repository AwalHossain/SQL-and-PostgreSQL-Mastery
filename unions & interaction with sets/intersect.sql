-- INTERSECT only show the  rsult that are common in both and queryRemove dupliated

-- INTERSECT ALL  find the rows common in the results of two queries

(SELECT *
FROM products
ORDER BY price DESC 
LIMIT 4) 
INTERSECT 
(SELECT * FROM products 
ORDER BY price/weight DESC
LIMIT 4)


