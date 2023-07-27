// const mysql = require('mysql2');

// // create the connection to database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'test'
// });

const departments = [
  {
    id: 0,
    name: "HR"
  }
]

const roles = [
  {
    id: 0,
    salary: 1000,
    title: "HR Manager",
    department_id: 0
  },
  {
    id: 0,
    salary: 1000,
    title: "HR Employee",
    department_id: 0
  }
]

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

const getRoleTitles = () => { return roles.map((v) => v.title) }
const getEmployeeNames = () => { return roles.map((v) => `${v.first_name} ${v.last_name}`) }

const inquire = require("inquirer")

var RUNNING = true

const menu = () => {
  inquire.prompt(
    {
      type: 'list',
      message: 'What would you like to do? ( Use arrow keys)',
      name: 'menu',
      choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
    }
  ).then((data) => {
    var continue_ = true
    console.log(data.menu)
    if (data.menu == 'View All Employees') {
      viewAllEmployees()
    }
    else if (data.menu == 'Add Employee') {
      addEmployee()
    }
    else if (data.menu == 'Update Employee Role') {
      updateEmployeeRole()
    }
    else if (data.menu == 'View All Roles') {
  
    }
    else if (data.menu == "Add Role") {
  
    }
    else if (data.menu == 'View All Departments') {
  
    }
    else if (data.menu == "Add Department") {
      addDepartment()
    }
    else if (data.menu == "Quit") {
      continue_ = false
    }
    if (continue_) menu()
  });
}


const viewAllEmployees = () => {
  const employee_names = employees.map((v, i) => `${v.first_name} ${v.last_name}`)
  console.log(employee_names)
}

const updateEmployeeRole = () => {
  inquire.prompt(
    [
      {
        type: 'list',
        message: 'which employee would you like to change the role of?',
        name: 'employee_name',
        choices: getEmployeeNames(),
      },
      {
        type: 'list',
        message: 'which employee role would you like to update?',
        name: 'role_title',
        choices: getRoleTitles(),
      },
    ]
  ).then((data) => {
    console.log(employees)
    data.id = employees.length
    console.log(data)
    // employees.push(
    //   {
    //     id: employees.length(),

    //   }
    // )
  })
}

const addEmployee = () => {
  inquire.prompt(
    [{
      type: 'input',
      message: 'what is employees first name',
      name: 'first_name',
    },
    {
      type: 'input',
      message: 'What is there last name?',
      name: 'last_name',
    },
  ]
    ).then((data) => {
      console.log(data.menu)
      if (data.menu == 'View Employee') {
        viewEmployees()
      }
      else if (data.menu == 'Add Employee') {
        addEmployee()
      }
      else if (data.menu == 'Add Role') {
        updateEmployeeRole()
      }
    });
};

const addDepartment = () => {
  inquire.prompt(
    [
      {
        type: 'input',
        message: 'Whats this department called?',
        name: 'department_name'
      },
      {
        type: 'checkbox',
        message: 'What roles would be included in this department',
        name: 'roles',
        choices: getRoleTitles()
      }
    ]
  ).then((data) => {
  })
};


 menu()