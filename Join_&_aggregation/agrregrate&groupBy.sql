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