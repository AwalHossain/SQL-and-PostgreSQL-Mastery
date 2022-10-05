select url, username from photos
right join users on 
users.id = photos.user_id;