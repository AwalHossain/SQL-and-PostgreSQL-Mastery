-- Writing a query that shows the name of only the second and the third most expensive phones

SELECT name 
FROM phones
ORDER BY price DESC
LIMIT 2
OFFSET 1;