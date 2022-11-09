-- When you only need to select one thing and show one item, you can use select with sub-query


SELECT (
SELECT MAX(price) FROM products
),
(
SELECT AVG(price) FROM products
)