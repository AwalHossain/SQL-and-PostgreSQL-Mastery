-- write a query where only show the name and price greater than samsung s650 monte


SELECT name, price
FROM phones 
WHERE price > (SELECT price
FROM products WHERE name = 'samsung s6520 monte'
);