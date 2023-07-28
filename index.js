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
  },
  {
    id: 1,
    name: "Art"
  },
  {
    id: 2,
    name: "Production"
  }

]

const roles = [
  {
    id: 0,
    salary: 100000,
    title: "HR Manager",
    department_id: 0
  },
  {
    id: 1,
    salary: 30000,
    title: "HR Employee",
    department_id: 0
  },
  {
    id: 2,
    salary: 200000,
    title: "Art Director",
    department_id: 1
  },
  {
    id: 3,
    salary: 30000,
    title: "Art Employee",
    department_id: 1
  },
  {
    id: 4,
    salary: 400000,
    title: "Production Manager",
    department_id: 2
  },
  {
    id: 5,
    salary: 50000,
    title: "Production Employee",
    department_id: 2
  },
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
    first_name: "Afro", 
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

const getDepartmentTitles = () => { return departments.map((v) => v.name) }
const getRoleTitles = () => { return roles.map((v) => v.title) }
const getEmployeeNames = () => { return employees.map((v) => `${v.first_name} ${v.last_name}`) }

const inquire = require("inquirer");


async function menu() {
  inquire.prompt(
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'menu',
      choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
    }
  ).then(async (data) => {
    var continue_ = true
    console.log(data.menu)
    if (data.menu == 'View All Employees') {
      viewAllEmployees()
    }
    else if (data.menu == 'Add Employee') {
      await addEmployee()
    }
    else if (data.menu == 'Update Employee Role') {
      await updateEmployeeRole()
    }
    else if (data.menu == 'View All Roles') {
      console.log(getRoleTitles())
    }
    else if (data.menu == "Add Role") {
      await addRole()
    }
    else if (data.menu == 'View All Departments') {
      console.log(getDepartmentTitles())
    }
    else if (data.menu == "Add Department") {
      await addDepartment()
    }
    else if (data.menu == "Quit") {
      continue_ = false
    }
    if (continue_) menu()
  })
};

const viewAllEmployees = () => {
  const employee_names = employees.map((v, i) => `${v.first_name} ${v.last_name}`)
  console.log(employee_names)
}
const addRole = async () => {
  await inquire.prompt()
}
const updateEmployeeRole = async () => {
  await inquire.prompt(
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
  }),
}

async function addEmployee() {
  await inquire.prompt(
    [
      {
        type: 'input',
        message: 'what is employees first name',
        name: 'first_name',
      },
      {
        type: 'input',
        message: 'What is there last name?',
        name: 'last_name',
      }
    ]
  ).then((data) => {
    console.log(data)

  })
}

const addDepartment = async () => {
  await inquire.prompt(
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