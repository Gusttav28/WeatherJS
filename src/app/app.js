import { get_place } from "./api.js";

console.log("javascript file loaded")

const button = document.getElementById("button")

const input = document.getElementById("inputPlace")

const divjson = document.getElementById("jsonInfo")

const titlePage = "Welcome to my Weather API"

document.getElementById("titlePage").innerHTML = titlePage;

async function handleChange() {
    const place = "caracas"
    const result = await get_place(place)
    divjson.innerHTML = JSON.stringify(result)
    console.log(result)
}

button.addEventListener('click', async function(event) {
    event.preventDefault();
    handleChange()        
});