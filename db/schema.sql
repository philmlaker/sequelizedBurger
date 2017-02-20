CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table plans.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean not null default 0,
date TIMESTAMP,
PRIMARY KEY (id)
);

-- Insert a set of records.
-- INSERT INTO plans (plan) VALUES ('Plan to fight a ninja.');
