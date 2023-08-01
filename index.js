// imports
const express = require('express');
const sequelize = require('./config');
const Student = require('./model/student');
const app = express();
const studentrouter = require('./route/studentrouter');
// server
sequelize.authenticate().
then(()=>{console.log('connection has been established successfully');})
.catch((err)=>{console.log(err);});

app.listen(3000, ()=>{console.log('listening to port 3000')});


// Logging
let requestCount = 0;
app.use((req, res, next) => {
  requestCount++;
  console.log('Request #' + requestCount + ': ' + req.method + ' ' + req.url);
  next();
});


app.use(express.json());

app.use('/students', studentrouter);


// const Employee = require('../miniproject2/employee');
// const Department = require('../miniproject2/department');

         sequelize.sync()
         .then(() => {
           console.log('Database synchronized');
         })
         .catch((err) => {
           console.log('Error synchronizing database:', err);
         });