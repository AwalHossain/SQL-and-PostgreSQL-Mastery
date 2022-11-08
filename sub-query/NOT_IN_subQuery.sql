-- Show the name of all products that are not in the same department as products with a price less than 100


SELECT name, department
FROM products 
WHERE department 
NOT IN (
SELECT department
FROM products 
WHERE price < 100
)