const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbconnection = require("./nano");
const app1 = express();
const port = 8000;

app1.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app1.use(bodyParser.json());

app1.post("/postdata", function (req) {
  const objectnew = {
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    adhar: req.body.adhar,
    address: req.body.address,
  };
  console.log("data from angular", objectnew);
  dbconnection.contact.insert(objectnew).then((data) => {
    console.log("data inserted successfully ", data);
  });
});

app1.post("/postdata1", function (req) {
  const objectnew1 = {
    name: req.body.name,
    email: req.body.email,
    location: req.body.location,
    service: req.body.service,
    date: req.body.date,
    category: req.body.category,
    bank: req.body.bank,
    ifsc: req.body.ifsc,
    amount: req.body.amount,
    
  };
  console.log("data from angular", objectnew1);
  dbconnection.pay.insert(objectnew1).then((data) => {
    console.log("data inserted successfully ", data);
  });
});

app1.post("/postdata2", function (req, res) {
  const objectnew2 = {
    userid: req.body.userid,
    password: req.body.password,
    type:"login"
  };
  const fetchData ={
    "selector" :{
      userid :objectnew2.userid,
      password :objectnew2.password,
    }
  }
  console.log(fetchData)
  dbconnection.login.find(fetchData).then((data) => {
    console.log("DharaniTest", data);
   res.send(data);
  });
});


app1.post("/postdata4", function (req) {
  const objectnew3 = {
    name: req.body.name,
    email: req.body.email,
    location: req.body.location,
  };
  console.log("data from angular", objectnew3);
  dbconnection.feedback.insert(objectnew3).then((data) => {
    console.log("data inserted successfully ", data);
  });
});

app1.listen(port, (err) => {
  if (err) {
    return console.log("something bad happ1ened", err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
