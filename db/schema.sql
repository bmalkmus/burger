CREATE DATABASE burgers_db;
DROP DATABASE IF EXISTS burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INTEGER auto_increment not null,
    burger_name varchar(50) not null,
    devoured boolean not null,
    primary key (id)
);