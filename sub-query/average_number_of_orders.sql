-- find the average number of order from all the user's order data


SELECT AVG(order_count)
FROM (
 SELECT user_id, COUNT(*) as order_count
FROM orders
GROUP BY user_id 
) as p;