console.log("script starts")

const apiKey = "1172d0f7"
const baseUrl = "https://www.omdbapi.com/?t="

let moviename = document.getElementById("moviename")
let Title = document.getElementById("Title")
let Year = document.getElementById("Year")
let Rated = document.getElementById("Rated")
let Released = document.getElementById("Released")
let Runtime = document.getElementById("Runtime")
let Genre = document.getElementById("Genre")
let Director = document.getElementById("Director")
let Writer = document.getElementById("Writer")
let  Actors = document.getElementById("Actors")
let Language = document.getElementById("Language")
let Country = document.getElementById("Country")
let Awards = document.getElementById("Awards")
// let Storyline = document.getElementById("Storyline")
let movieposter = document.getElementById("movieposter")
// let Storylineshow = document.getElementById("Storyline")
// let Readmoree = document.getElementById("Readmore")
// let Readleess = document.getElementById("Readless")
let response = {}

async function btnsearch(){
    let mainUrl = baseUrl+moviename.value+"&apikey="+apiKey+"&plot=full"
    console.log("mainUrl",mainUrl)
    response = await fetch(mainUrl)
    console.log("response",response)
    let data = await response.json()
    console.log("data",data)
    displaydata(data)
    moviename.value = ""
}

function displaydata(data){
    console.log("data in displaydata",data.Title)
    Title.textContent = data.Title
    Year.textContent = data.Year
    Rated.textContent = data.Rated
    Released.textContent = data.Released
    Runtime.textContent = data.Runtime
    Genre.textContent = data.Genre
    Director.textContent = data.Director
    Writer.textContent = data.Writer
    Actors.textContent = data.Actors
    Country.textContent = data.Country
    Language.textContent = data.Language
    Awards.textContent = data.Awards
    // Storyline.textContent = data.Plot
    movieposter.src = data.Poster

    // Title.textContent = data.Title
}

// function Readmore(){
//     Storylineshow.style.display = "block"
//     Readmoree.style.display = "none"
//     Readleess.style.display = "block"
// }

// function Readless(){
//     Storylineshow.style.display = "none"
//     Readmoree.style.display = "block"
//     Readleess.style.display = "none"

// }
