let express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbconnection = require("./nano");
let app = express();
app.disable("x-powered-by");
let helmet = require("helmet");
app.use(helmet.hidePoweredBy());


const port = 8000;

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.use(bodyParser.json());

app.post("/register", function (req) {
  const objectnew = {
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    aadhaar: req.body.aadhaar,
    address: req.body.address,
  };
  console.log("data from angular", objectnew);
  dbconnection.contact.insert(objectnew).then((data) => {
    console.log("data inserted successfully ", data);
  });
});

app.post("/bookingevent", function (req) {
  const objectnew1 = {
    name: req.body.name,
    email: req.body.email,
    location: req.body.location,
    service: req.body.service,
    date: req.body.date,
    category: req.body.category,
    amount: req.body.amount,
  };
  console.log("data from angular", objectnew1);
  dbconnection.pay.insert(objectnew1).then((data) => {
    console.log("data inserted successfully ", data);
  });
});

app.post("/adminlogin", function (req, res) {
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

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
