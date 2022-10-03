-- Delete cascade means it is going delete all the data that referencing the the user id

CREATE TABLE photos (
  id serial PRIMARY KEY,
  url VARCHAR(200),
  use_id INTEGER REFERENCES user(ID) on DELETE CASCADE
  )