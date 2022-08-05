import express from "express";

const app = express();

app.get("/", (req, res) => {
  let host = req.get("host");

  res.send("Hello world!");
});

const users = [
  {
    name: "Zach",
    domain: "zach.com:3000",
    about: "Zach is the best tutorial creator ever",
  },
  {
    name: "Mike",
    domain: "mike.com:3000",
    about: "Mike is the best new developer ever",
  },
];

app.get("/about", (req, res) => {
  let host = req.get("host");

  let user = users.find((user) => user.domain === host);

  if (user) {
    return res.send(user.about);
  }

  res.send("Oh no, we dont have an about page for this user.");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
