-- Write a query that prints name and price for each phone. In addition, print out the ratio of the phones price against max price of all phones


SELECT name, price,

price/(SELECT MAX(price) from phones)

from phones