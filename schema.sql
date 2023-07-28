DROP DATABASE IF EXISTS timeTracker_db;

CREATE DATABASE timeTracker_db;

USE timeTracker_db;

CREATE TABLE employees_db (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL
);

CREATE TABLE role_db (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    FOREIGN KEY (department_id) REFERENCES department_db(id)
);

CREATE TABLE department_db (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL
);