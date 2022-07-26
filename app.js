const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const ejs = require("ejs");
const _ = require("lodash");
const path = require("path");
const posts = require("../lap-1-project-front-end/public/post.json");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static("../client/public"));

function getData() {
  let data = fs.readFileSync("./public/post.json");
  data = JSON.parse(data);
  return data;
}

function storeData(req) {
  data = getData("./public/post.json");
  data.posts.push(req);
  let myJSON = JSON.stringify(data, null, 2);
  fs.writeFileSync("./public/post.json", myJSON);
}

app.get("/", (req, res) => {
  currentData = getData();
  console.log(currentData);
  res.render("index", { currentData: currentData });
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.post("/post", (req, res) => {
  data = req.body;
  currentData = getData();

  // Function to iterate through the data to find the highest ID
  let highestId = 0;
  currentData.posts.forEach((post) => {
    if (post.id > highestId) {
      highestId = post.id;
    }
  });
  // Allocate the data to variables
  let id = highestId + 1;
  let title = req.body.title;
  let text = req.body.text;
  let comments = req.body.comments;
  storeData({
    id: id,
    title: title,
    text: text,
    comments: [],
  });
  //   res.status(201).json({
  //     success: true,
  //   });

  res.redirect("/");
});

app.get("/postPage/:postName", (req, res) => {
  let postName = _.lowerCase(req.params.postName);
  currentData = getData();

  for (let i = 0; i < currentData.posts.length; i++) {
    if (_.lowerCase(currentData.posts[i].title) === postName) {
      res.render("postPage", {
        title: currentData.posts[i].title,
        text: currentData.posts[i].text,
      });
    }
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
