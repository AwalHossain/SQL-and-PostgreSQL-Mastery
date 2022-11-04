-- Write a query that will print the manufacturer of phones whrere the phone's price is less than 170. Also print all manufacturer that have created more than two phones



SELECT manufacturer 
FROM  phones
WHERE price > 170
UNION 
SELECT manufacturer FROM phones 
GROUP BY manufacturer 
HAVING COUNT(*)>2;