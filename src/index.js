const express = require("express");
const app = express();
const port = 3001;

const cors = require("cors");
const morgan = require("morgan");

const { checkDomainName } = require("./handlers/searchDomain");

app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/check_domain", (req, res) => {
  var domainName = req.query.name;
  // setTimeout(() => {
  checkDomainName(domainName, res);
  // var response = checkDomainName(domainName);
  // res.send(response);
  // }, );r
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
