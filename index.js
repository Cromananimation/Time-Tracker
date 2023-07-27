// const mysql = require('mysql2');

// // create the connection to database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'test'
// });

const employees = [
  { 
    id: 0,
    first_name: "Berzerker", 
    last_name: "Smith",
    role_id: 0,
    manager_id: 0 
  },
  { 
    id: 1,
    first_name: "Afro", 
    last_name: "Samari",
    role_id: 1,
    manager_id: 0 
  },
  { 
    id: 2,
    first_name: "Test", 
    last_name: "Samari",
    role_id: 2,
    manager_id: 2 
  },
  { 
    id: 3,
    first_name: "Stan", 
    last_name: "Lee",
    role_id: 3,
    manager_id: 2 
  },
  { 
    id: 4,
    first_name: "Miss", 
    last_name: "Bushbush",
    role_id: 4,
    manager_id: 4 
  },
  { 
    id: 5,
    first_name: "Saitama", 
    last_name: "Genos",
    role_id: 5,
    manager_id: 4
  }
]

const inquire = require("inquirer")

inquire.prompt(
  {
    type: 'list',
    message: 'What would you like to do?',
    name: 'menu',
    choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
  }
).then((data) => {
  console.log(data.menu)
  if (data.menu == 'View Employee') {
    viewEmployees()
  }
  else if (data.menu == 'Add Employee') {
    addEmployee()
  }
  else if (data.menu == 'Update Employee Role') {
    updateEmployeeRole()
  }

})


const viewEmployees = () => {
 console.log(employees)
}

const updateEmployeeRole = () => {
  inquire.prompt(
    [
      {
        type: 'list',
        message: 'which employee role would you like to update?',
        name: 'employee_name',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'Programming', 'HR', 'Production'],
      },
      {
        type: 'list',
        message: 'Which role do you want to assign the selected employee?',
        name: 'new_role',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'Programming', 'HR', 'Production'],
      }
    ]
  ).then((data) => {

  })
}
const addEmployee = () => {
  inquire.prompt(
    [{
      type: 'input',
      message: 'First name?',
      name: 'first_name',
    },
    {
      type: 'input',
      message: 'Last name?',
      name: 'last_name',
    },
    {
      type: 'input',
      message: 'Role ID?',
      name: 'role_id',
    },
    {
      type: 'input',
      message: 'Manager ID?',
      name: 'manager_id',
    }]
  ).then((data) => {
    console.log(employees)
    data.id = employees.length()
    console.log(data)
    // employees.push(
    //   {
    //     id: employees.length(),

    //   }
    // )
  })
}