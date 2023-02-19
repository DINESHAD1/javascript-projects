// let jokegenerator = document.getElementById("jokegenerator")

let question = document.getElementById("question");
let answer = document.getElementById("answer");
const apiurl = 'https://v2.jokeapi.dev/joke/Programming?type=twopart'
var responsedata = {}

async function jokegenerator(){
    const response = await fetch(apiurl)
    const data = await response.json()
    responsedata = data
    functionchangingtext()

}

function functionchangingtext(){
    question.textContent = responsedata.setup
    answer.textContent = responsedata.delivery
}


jokegenerator()