create table user(
    id int primary key AUTO_INCREMENT,
    name varchar(250),
    email varchar(50),
    contactNumber varchar(20),
    password varchar(250),
    status varchar(20),
    role varchar(20),
    UNIQUE (email)
)

insert into user(name, contactNumber, email, password, status, role) values ("Awal", "01742251153", "admin@admin.com", "admin", "true", "admin")