document.querySelector('button').addEventListener('click', getQuote)

function getQuote() {
fetch("https://api.kanye.rest")
.then(res => res.json())
.then(data => {
    console.log(data.quote)
    document.querySelector("p").innerText = data.quote
})

.catch(err => {
    console.log(`error ${err}`)
})};
