// Giphy API

//search endpoint
const url = "https://api.giphy.com/v1/gifs/search?api_key=goUgQEQqeYYGEBmKW7QbDqW0PhVQopno&limit=10&q="

document.addEventListener("DOMContentLoaded", getGif)

function getGif () {
    document.getElementById("btnSearch").addEventListener("click", e => {
        e.preventDefault()
        let searchedGif = document.getElementById("search").value
        let newUrl = `${url}${searchedGif}`
        console.log(newUrl)
        fetch(newUrl)
        .then(response => response.json())
        .then(content => {
            //data[0].images.downsized.url
            let gif0 = document.createElement("img")
            gif0.src = content.data[0].images.downsized.url
            gif0.alt = content.data[0].title
            gif0.classList.add("gif-size")
            let gif0Div = document.querySelector(".gif0")
            gif0Div.appendChild(gif0)

            let gif1 = document.createElement("img")
            gif1.src = content.data[1].images.downsized.url
            gif1.alt = content.data[1].title
            gif1.classList.add("gif-size")
            let gif1Div = document.querySelector(".gif1")
            gif1Div.appendChild(gif1)

            let gif2 = document.createElement("img")
            gif2.src = content.data[2].images.downsized.url
            gif2.alt = content.data[2].title
            gif2.classList.add("gif-size")
            let gif2Div = document.querySelector(".gif2")
            gif2Div.appendChild(gif2)

            let gif3 = document.createElement("img")
            gif3.src = content.data[3].images.downsized.url
            gif3.alt = content.data[3].title
            gif3.classList.add("gif-size")
            let gif3Div = document.querySelector(".gif3")
            gif3Div.appendChild(gif3)

            let gif4 = document.createElement("img")
            gif4.src = content.data[4].images.downsized.url
            gif4.alt = content.data[4].title
            gif4.classList.add("gif-size")
            let gif4Div = document.querySelector(".gif4")
            gif4Div.appendChild(gif4)

            let gif5 = document.createElement("img")
            gif5.src = content.data[5].images.downsized.url
            gif5.alt = content.data[5].title
            gif5.classList.add("gif-size")
            let gif5Div = document.querySelector(".gif5")
            gif5Div.appendChild(gif5)

            let gif6 = document.createElement("img")
            gif6.src = content.data[6].images.downsized.url
            gif6.alt = content.data[6].title
            gif6.classList.add("gif-size")
            let gif6Div = document.querySelector(".gif6")
            gif6Div.appendChild(gif6)

            let gif7 = document.createElement("img")
            gif7.src = content.data[7].images.downsized.url
            gif7.alt = content.data[7].title
            gif7.classList.add("gif-size")
            let gif7Div = document.querySelector(".gif7")
            gif7Div.appendChild(gif7)

            let gif8 = document.createElement("img")
            gif8.src = content.data[8].images.downsized.url
            gif8.alt = content.data[8].title
            gif8.classList.add("gif-size")
            let gif8Div = document.querySelector(".gif8")
            gif8Div.appendChild(gif8)

            let gif9 = document.createElement("img")
            gif9.src = content.data[9].images.downsized.url
            gif9.alt = content.data[9].title
            gif9.classList.add("gif-size")
            let gif9Div = document.querySelector(".gif9")
            gif9Div.appendChild(gif9)
        })
        .catch(err => {
            console.error(err)
        })
    })
}

