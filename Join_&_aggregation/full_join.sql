select url, username from photos
FULL join users on 
users.id = photos.user_id;