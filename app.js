const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const dataCompanies = require("./dataCompanies");
const dataStudents = require("./dataStudents");
const app = express();
var newCompanyData = [];
var newStudentsData = [];

app.use(cors());
app.use(bodyparser.json());


app.get("/company", (request, response) => {
  response.json(dataCompanies);
});

app.get("/students", (request, response) => {
  response.json(dataStudents);
});

app.post("/company", (request, response) => {
  newCompanyData.push(request.body);
  response.json(newCompanyData);
});

app.get("/newCompanyData", (request, response) => {
  response.json(newCompanyData);
});

app.post("/students", (request, response) => {
  newStudentsData.push(request.body);
  response.json(newStudentsData);
});

app.get("/newStudentsData", (request, response) => {
  response.json(newStudentsData);
});

app.listen(process.env.PORT || 3000);
