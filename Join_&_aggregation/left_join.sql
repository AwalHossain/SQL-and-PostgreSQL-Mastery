-- Left join gets all the value from left hand side even if its foreign key is null but from the right hand side only gets the value if it match up with left side table


select url, username from photos
left join users on 
photos.user_id = users.id;