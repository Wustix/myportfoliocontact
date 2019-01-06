DROP DATABASE IF EXISTS message_db;
CREATE DATABASE message_db;


 CREATE TABLE categories (
 	id INTEGER NOT NULL AUTO_INCREMENT,
    name_list VARCHAR (100),
	email_list varchar(75) NOT NULL,
	message_list VARCHAR (500),
    PRIMARY KEY (id)
);