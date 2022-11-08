-- use sub-query inside join method 

SELECT first_name 
FROM users
JOIN (
	SELECT user_id FROM orders WHERE product_id = 3
) as o 
on users.id = o.user_id;


-- Normal method

SELECT first_name 
FROM users
JOIN orders 
on users.id = orders.user_id	
WHERE product_id =3