-- LIMIT caluse makes it easy to get multi page results
-- OFFSET keyword most often use wiht limit keyword and it removes the amount of result that mention with this keyword

SELECT * 
FROM users
LIMIT 3
OFFSET 3;