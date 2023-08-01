DROP DATABASE IF EXISTS timeTracker_db;

CREATE DATABASE timeTracker_db;

USE timeTracker_db;

CREATE TABLE department_db (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role_db (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department_db(id)
);

CREATE TABLE employees_db (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT DEFAULT NULL,
    FOREIGN KEY (role_id) REFERENCES role_db(id),
    FOREIGN KEY (manager_id) REFERENCES employees_db(id)
);
