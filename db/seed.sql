INSERT INTO department_db (name) VALUES ("HR"), ("Art"), ("Production"), ("Programming");

INSERT INTO role_db (title, salary, department_id)
VALUES 
    ("HR Manager", 20000, 1), -- 1 (ID of HR department in department_db table)
    ("HR Employee", 10000, 1), -- 1 (ID of HR department in department_db table)
    ("Art Director", 100000, 2), -- 2 (ID of Art department in department_db table)
    ("Art Employee", 100000, 2), -- 2 (ID of Art department in department_db table)
    ("Production Manager", 100000, 3), -- 3 (ID of Production department in department_db table)
    ("Production Employee", 100000, 3); -- 3 (ID of Production department in department_db table)

INSERT INTO employees_db (first_name, last_name, role_id, manager_id)
VALUES 
    ("Berzerker", "Smith", 1, NULL), -- NULL (no manager for HR Manager)
    ("Afro", "Samari", 2, 1), -- 1 (ID of HR Manager in employees_db table)
    ("Stan", "Lee", 2, 1), -- 1 (ID of HR Manager in employees_db table)
    ("Miss", "Bushbush", 4, 3), -- 4 (ID of Art Employee in role_db table)
    ("Saitama", "Genos", 5, 3); -- 5 (ID of Production Employee in role_db table)