/*eslint-env es6*/
var fs = require('fs');

// json file with the data
var teams = fs.readFileSync('api/data/teams.json');
var users = fs.readFileSync('api/data/users.json');

var _teams = JSON.parse(teams);
var _users = JSON.parse(users);
const express = require('express');
const app = express();

// To solve the cors issue
const cors = require('cors');

app.listen(3000, () => console.log('Server Start at the Port'));

app.use(express.static('public'));
app.use(
  cors({
    origin: '*',
    methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    allowedHeaders: "'X-Requested-With,content-type'",
    credentials: true,
  }),
);

app.get('/users', function (req, res) {
  res.send(_users);
});

app.get('/teams', function (req, res) {
  res.send(_teams);
});
