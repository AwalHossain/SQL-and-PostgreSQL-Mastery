--  using only sub-queries, print max price, min price, and average price of all phones


SELECT 
    (
        SELECT MAX(price) FROM phones
    ) as max_price,
    (
         SELECT MIN(price) FROM phones
    ) as min_price,
    (
         SELECT avg(price) FROM phones
    ) as avg