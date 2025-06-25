import { get_astronomy, get_place, get_weather } from "./api.js";


console.log("javascript file loaded")


const button = document.getElementById("button")

const input_getPlace = document.getElementById("inputPlace")
const input_getWeather = document.getElementById("inputWeather")
const input_getAstronomy = document.getElementById("inputGetAstronomy")

const divjson1 = document.getElementById("jsonInfo1")
const divjson2 = document.getElementById("jsonInfo2")
const divjson3 = document.getElementById("jsonInfo3")

const titlePage = "Welcome to my Weather API"

// document.getElementById("titlePage").innerHTML = titlePage;


const jsonName = document.getElementById("JsonName")
const jsonName_Result = document.getElementById("jsonName_Result")
const jsonRegion = document.getElementById("JsonRegion")
const jsonRegion_Result = document.getElementById("jsonRegion_Result")
const jsonCountry = document.getElementById("JsonCountry")
const jsonCountry_result = document.getElementById("jsonCountry_Result")
const jsonlat = document.getElementById("jsonLat")
const jsonlat_Result = document.getElementById("jsonLat_result")
const jsonlon = document.getElementById("jsonlon")
const jsonlon_result = document.getElementById("jsonlon_result")
const jsonlocaltime = document.getElementById("jsonLocaltime")
const jsonlocaltime_result = document.getElementById("jsonlocaltime_result")

async function getting_getPlace_API_Input() {
    const inputValue = input_getPlace.value;
    try {
        const result = await get_place(inputValue)
    } catch (error) {
        console.log("this is the err " + error)
    }
}

export async function getting_getPlace_API(mapValue) {
    const inputValue = input_getPlace.value;
    console.log(inputValue)
    try {
        // const resultInput = await get_place(inputValue)
        const resultMap = await get_place(mapValue)
        // divjson1.innerHTML = JSON.stringify(result)
        // jsonName.innerHTML = "Name:"
        // jsonName_Result.innerHTML = result.location.name
        // jsonRegion.innerHTML = "Region:"
        // jsonRegion_Result.innerHTML = result.location.region
        // jsonCountry.innerHTML = "Country:"
        // jsonCountry_result.innerHTML = result.location.country
        // jsonlat.innerHTML = "Latitud:"
        // jsonlat_Result.innerHTML = result.location.lat
        // jsonlon.innerHTML = "longitud:"
        // jsonlon_result.innerHTML = result.location.lon
        // jsonlocaltime.innerHTML = "Localtime:"
        // jsonlocaltime_result.innerHTML = result.location.localtime
        // console.log("this is the lat: ", jsonlat_Result)
        // console.log(result)
        
    } catch (error) {
        // divjson1.innerHTML = "There's no response from the server"
        console.log("this is the err " + error)
    }
    
}

async function getting_getWeather_API() {
    const inputValue = input_getWeather.value;
    console.log(inputValue)
    try {
        const result = await get_weather(inputValue)
        divjson2.innerHTML = JSON.stringify(result)
        console.log(result)
    } catch (error) {
        divjson2.innerHTML = "There's no response from the server"
        console.log("this is the err " + error)
    }
}

async function getting_getAstronomy_API() {
    const inputValue = input_getAstronomy.value;
    console.log(inputValue)
    try {
        const result = await get_astronomy(inputValue)        
        divjson3.innerHTML = JSON.stringify(result)
        console.log(result)
    } catch (error) {
        divjson3.innerHTML = "There's no response from the server"
        console.log("this is the err " + error)
    }
}

button.addEventListener('click', async function(event) {
    event.preventDefault();
    const inputValue = input_getPlace.value
    // const inputValue2 = input_getWeather.value
    // const inputValue3 = input_getAstronomy.value
    const inputResult = inputValue.toLowerCase()
    console.log("this is the value ", inputResult)
    try {
        if(inputResult){
            console.log("it works, this is the input value: " + inputResult)
            await getting_getPlace_API() 
            await getting_getPlace_API_Input()
        }        
    } catch (error) {
        console.log("There's an error")
    }


    // try {
    //     if (inputValue2) {
    //         console.log("it works, this is the input value: " + inputValue2)
    //         await getting_getWeather_API()
    //     }
    // } catch (error) {
    //     console.log("There's an error")
    // }
    

    // try {
    //     if (inputValue3) {
    //         console.log("it works this is the input value: " + inputValue3)
    //         await getting_getAstronomy_API()       
    //     }
    // } catch (error) {
    //     console.log("there's an error")
    // }
    
    
});