import express from 'express';
import path from 'path';
require('dotenv').config();
var cors = require('cors');
//const mysql = require('mysql');
const knex = require('knex');

//const sequelize = require('./models');
const Task = require('../models/Task');
//const Task = require('./backend/models/Task');
//const knex = require('knex')(require('./knexfile').development);


const app = express();
const port = 3001;
const apiV1Path = '/api/v1/';

app.use(cors())
app.use(express.json());

/*const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // replace with your MySQL username
  password: 'password',  // replace with your MySQL password
  database: 'my_database'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});*/

app.get(apiV1Path + 'tasks', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
  console.log(process.env.DB_Name);
  console.log(`Server is running at http://localhost:${port}`);
});

app.post(apiV1Path + 'tasks/create', async (req, res) => {
  const tasks = await knex('tasks').select('*');
  res.json(tasks);
});

app.post(apiV1Path + 'tasks/completed', async (req, res) => {
  const tasks = await knex('tasks').select('*').where('completed', 1);
  res.json(tasks);
});

app.post(apiV1Path + 'tasks/not_completed', async (req, res) => {
  const tasks = await knex('tasks').select('*').where('completed', 0);
  res.json(tasks);
});

app.get(apiV1Path + 'tasks/complete_task/:taskId', async (req, res) => {
  const { taskId } = req.params;
 // const task = await knex('tasks').where('id', taskId).first().update('completed', 1);
  //const task = await knex('tasks').where('id', taskId).first();

  knex.schema.hasTable('tasks').then((exists: any) => {
    console.log(exists);
  });

  //console.log(task);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});






/*app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});*/