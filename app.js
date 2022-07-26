const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const _ = require("lodash")

const app = express()

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(express.static(__dirname + "/public"))

const posts = []

app.get("/", (req, res) => {
    res.render("index", {posts: posts})
})

app.get("/post", (req, res) => {
    res.render("post")
})

app.post("/post", (req, res) => {

    let newPost = {
        title: req.body.title,
        text: req.body.text
    }

    posts.push(newPost)

    res.redirect("/")

})

app.get("/postPage/:postName", (req, res) => {
    let postName = _.lowerCase(req.params.postName)

    for (let i = 0; i < posts.length; i++) {
        if (_.lowerCase(posts[i].title) === postName) {
            res.render("postPage", {title: posts[i].title, text: posts[i].text})
        }
    }
})



































app.listen(3000, () => {
    console.log("Server started on port 3000")
})

