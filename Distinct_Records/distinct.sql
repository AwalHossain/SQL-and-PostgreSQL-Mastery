-- Distinct and group by keyword kinda simillar cause both go through column and only show the unique values but you cannot use both keyword together


SELECT DISTINCT department 
FROM products;


-- you can even use count aggregrate function with distinct but only with one 


SELECT COUNT(DISTINCT department )
FROM products;


-- DISTINCT keyword can be used to get unique column set but repeated columnt

SELECT DISTINCT department, name
FROM products;