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

-- // Insert values into table 

insert into user(name, contactNumber, email, password, status, role) values ("Awal", "01742251153", "admin@admin.com", "admin", "true", "admin")


-- Create another table call category

create table category(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    primary key(id)
)


-- Product table

create table product(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    categoryId integer NOT NULL,
    description varchar(255),
    price integer,
    status varchar(50),
    primary key(id)
)

