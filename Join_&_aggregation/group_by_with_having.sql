-- Find the number of comments for each photo where the photo_id is less than 3 and photo has more than 2 comments

SELECT photo_id, COUNT(*)
FROM comments
where photo_id <3
GROUP BY photo_id
HAVING count(*) >2;


