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

    console.log(req.body)

    let date = getPostDate()

    let newPost = {
        title: req.body.title,
        text: req.body.text,
        comments: [],
        time: date
    }

    posts.push(newPost)

    res.redirect("/")

})

app.get("/postPage/:postName", (req, res) => {
    let postName = _.lowerCase(req.params.postName)

    for (let i = 0; i < posts.length; i++) {
        if (_.lowerCase(posts[i].title) === postName) {
            res.render("postPage", {title: posts[i].title, text: posts[i].text, comments: posts[i].comments, time: posts[i].time})
        }
    }
})

app.post("/postPage/:postName", (req, res) => {
    let postName = _.lowerCase(req.params.postName)
    let newComment = req.body.comment

    for (let i = 0; i < posts.length; i++) {
        if (_.lowerCase(posts[i].title) === postName) {
            posts[i].comments.push(newComment)
            res.render("postPage", {title: posts[i].title, text: posts[i].text, comments: posts[i].comments, time: posts[i].time})
        }
    }
})

function getPostDate() {

    let date = new Date()

    hour = date.getHours()
    minute = date.getMinutes()
    day = date.getDate()
    month = date.getMonth()
    year = date.getFullYear()

    if (month === 1) {
        month = "Jan"
    } else if (month === 2) {
        month = "Feb"
    } else if (month === 3) {
        month = "Mar"
    } else if (month === 4) {
        month = "Apr"
    } else if (month === 5) {
        month = "May"
    } else if (month === 6) {
        month = "Jul"
    } else if (month === 7) {
        month = "Aug"
    } else if (month === 8) {
        month = "Sep"
    } else if (month === 9) {
        month = "Oct"
    } else if (month === 10) {
        month = "Nov"
    } else if (month === 11) {
        month = "Dec"
    } else if (month === 0) {
        
    }

    let postDate = `${hour}:${minute} · ${month} ${day}, ${year}`

    return postDate
}

































app.listen(3000, () => {
    console.log("Server started on port 3000")
})

