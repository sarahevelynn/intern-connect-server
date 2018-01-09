const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const data = require("./dataCompanies");
const data2 = require("./dataStudents");
const app = express();
var newCompanyData = [];
var newStudentsData = [];



app.use(cors());
app.use(bodyparser.json());

app.get("/company", (request, response) => {
  response.json(data);
});

app.get("/students", (request, response) => {
  response.json(data2);
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
