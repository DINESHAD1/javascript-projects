let quoteContainer = document.querySelector('#quote-container');
let quoterText = document.querySelector('#quote');
let authorText = document.querySelector('#author');
let twitterBtn = document.querySelector('#twitter');
let newQuoteBtn = document.querySelector('#new_quote');
const loader = document.querySelector('#loader');

let apiQuotes = [];

//show loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide Loading
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//Show New Quote
function newQuote() {
    loading();
    //Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    authorText.textContent = quote.author == null ? 'UnKnown' : quote.author;
    console.log(quote.text.length)
    quote.text.length > 100 ? quoterText.classList.add('long-quote') : quoterText.classList.remove('long-quote')
    quoterText.textContent = quote.text;
    setTimeout(complete,50)
}

// Get Quotes From API

async function getQuotes() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //Catch Error Here
    }
}

//Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoterText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click',newQuote)
twitterBtn.addEventListener('click',tweetQuote)

//On load
getQuotes()
// loading()