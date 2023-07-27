INSERT INTO department_db (name) VALUES ("HR"),
                                        ("Art"),
                                        ("Production"),
                                        ("Programming"),



INSERT INTO role_db (title, salary, department_id)
VALUES ("HR Manager", 20000, 0), -- 0
       ("HR Employee", 10000, 0), -- 1
       ("Art Manager", 100000, 1), -- 2
       ("Art Employee", 100000, 1) -- 3
       ("Production Manager", 100000, 1), -- 4
       ("Production Employee", 100000, 1) -- 5

INSERT INTO employees_db (first_name, last_name, role_id, manager_id)
VALUES ("Berzerker", "Smith", 0, 0),
       ("Afro", "Samari", 1, 0),
       ("Stan", "Lee", 1, 0),
       ("Miss", "Bushbush", 2, 3),
       ("Saitama", "Genos", 3, 3);
       