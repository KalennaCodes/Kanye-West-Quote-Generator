document.querySelector('button').addEventListener('click', getJoke)

function getJoke() {
fetch("https://icanhazdadjoke.com/api")
.then(res => res.json())
.then(data => {
    console.log(data.quote)
    document.querySelector("p").innerText = data.quote
})

.catch(err => {
    console.log(`error ${err}`)
})};





/* document.querySelector('button').addEventListener('click', getJoke)

function getJoke() {
fetch("https://icanhazdadjoke.com/")
.then(res => res.json())
.then(data => {
    console.log(data.getJoke)
    document.querySelector('p').innerHTML = data.message
 })
.catch(err => {
console.log(`error ${err}`)
})}; */
