-- null values are not counted using count aggregrate function

select user_id,

count(*)
 from photos