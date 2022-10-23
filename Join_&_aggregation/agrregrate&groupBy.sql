-- null values are not counted using count aggregrate function

select user_id,

count(*)
 from photos



--  number of comments per photo id

SELECT
  photo_id,
  COUNT(*)
FROM
  comments
GROUP BY
  photo_id;


  -- Get authors name with number of book they have published

  SELECT name, count(*)
  FROM books
  join author
  on author.id= books.id
  GROUP BY author.name 
