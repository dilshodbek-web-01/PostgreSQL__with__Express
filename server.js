const express = require("express");
const pool = require("./db/config");
const cors = require('cors')

// routes
const emails = require("./router/emails.router");
const users = require("./router/users.router");
const fruits = require("./router/fruits.router");
const courses = require("./router/courses.router");
const company = require("./router/company.router");
const employees = require("./router/employees.router");
const cars = require("./router/cars.router");
const customers = require("./router/customers.router");


const app = express();
app.use(express.json());
app.use(cors());

app.use("/emails", emails);
app.use("/users",users);
app.use("/fruits", fruits);
app.use("/courses", courses);
app.use("/company", company);
app.use("/employees", employees);
app.use("/cars", cars);
app.use("/customers", customers);



app.listen(4040, () => {
    console.log(4040);
})