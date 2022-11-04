-- EXCEPT  find the rows that are present in the first query but not second query. Remove duplicates

-- EXCEPT ALL find the rows that are present in first query but not second query



(SELECT *
FROM products
ORDER BY price  
LIMIT 4) 
EXCEPT
(
SELECT * FROM products 
ORDER BY price/weight DESC
LIMIT 4
)