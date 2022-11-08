-- Use IN keyword as sub-query


SELECT id 
FROM orders 
WHERE product_id IN (
	SELECT id FROM products WHERE price/weight >50
)