import { get_astronomy, get_place, get_weather } from "./api.js";


console.log("javascript file loaded")


const button = document.getElementById("button")

const input_getPlace = document.getElementById("inputPlace")
const input_getWeather = document.getElementById("inputWeather")
const input_getAstronomy = document.getElementById("inputGetAstronomy")

const modalBody = document.getElementById("modalBody")
const tempetureHTML = document.getElementById("tempetureHTML")
const countryModalLabel = document.getElementById("countryModalLabel")
const windHTML = document.getElementById("windHTML")
const humidityHTML = document.getElementById("humidityHTML")
const uvIndexHTML = document.getElementById("uvIndexHTML")
const conditionHTML = document.getElementById("conditionHTML")
const localtime_label = document.getElementById("localtime")
const seachButton = document.getElementById("searchButton")
const inputCountry = document.getElementById("inputCountry")

const divjson1 = document.getElementById("jsonInfo1")
const divjson2 = document.getElementById("jsonInfo2")
const divjson3 = document.getElementById("jsonInfo3")

const titlePage = "Welcome to my Weather API"

// document.getElementById("titlePage").innerHTML = titlePage;


// const jsonName = document.getElementById("JsonName")
// const jsonName_Result = document.getElementById("jsonName_Result")
// const jsonRegion = document.getElementById("JsonRegion")
// const jsonRegion_Result = document.getElementById("jsonRegion_Result")
// const jsonCountry = document.getElementById("JsonCountry")
// const jsonCountry_result = document.getElementById("jsonCountry_Result")
// const jsonlat = document.getElementById("jsonLat")
// const jsonlat_Result = document.getElementById("jsonLat_result")
// const jsonlon = document.getElementById("jsonlon")
// const jsonlon_result = document.getElementById("jsonlon_result")
// const jsonlocaltime = document.getElementById("jsonLocaltime")
// const jsonlocaltime_result = document.getElementById("jsonlocaltime_result")




export async function getting_getPlace_API_Input() {
    const inputValue = input_getPlace.value;
    const countryList = []
    try {
        const result = await get_place(inputValue)
        const location = result.location.name
        const region = result.location.region
        const lat = result.location.lat
        const lon = result.location.lon
        const localtime = result.location.localtime
        countryList.push(location, region, lat, lon, localtime)
    } catch (error) {
        console.log("this is the err " + error)
    }
    return countryList
}

export async function getting_getPlace_API(mapValue) {
    const inputValue = input_getPlace.value;
    console.log(inputValue)
    const countryList = []
    try {
        const result = await get_place(mapValue)
        const country = result.location.country
        const location = result.location.name
        const region = result.location.region
        const lat = result.location.lat
        const lon = result.location.lon
        const localtime = result.location.localtime
        countryList.push(location, region, lat, lon, localtime)

        modalBody.innerHTML = `You selected, ${country}, which has a capital call: ${location}`;

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
    return countryList
    
}



export async function getting_getWeather_API(mapValue) {
    // const inputValue = input_getWeather.value;
    // console.log(inputValue)
    const countryList = []
    try {
        const result = await get_weather(mapValue)
        const country = result.location.country
        const location = result.location.name
        const region = result.location.region
        const lat = result.location.lat
        const lon = result.location.lon
        const localtime = result.location.localtime
        const tempeture = result.current.temp_c
        const wind_kph = result.current.wind_kph
        const humidity = result.current.humidity
        const uvIndex = result.current.uv
        const condition = result.current.condition.text
        
        countryList.push(location, region, lat, lon, localtime, tempeture, wind_kph, humidity, uvIndex, condition)
        console.log(result)

        localtime_label.innerHTML = localtime
        countryModalLabel.innerHTML = country
        tempetureHTML.innerHTML = `${tempeture}°`
        windHTML.innerHTML = `${wind_kph} km/h`
        humidityHTML.innerHTML = `${humidity}%`
        
        if(uvIndex <= 2){
            uvIndexHTML.innerHTML = `${uvIndex} Low`
        }
        else if(uvIndex > 2 && uvIndex < 6){
            uvIndexHTML.innerHTML = `${uvIndex} Moderate`
        }
        else if(uvIndex > 5 && uvIndex < 8){
            uvIndexHTML.innerHTML = `${uvIndex} High`
        }
        else if(uvIndex > 7 && uvIndex < 11){
            uvIndexHTML.innerHTML = `${uvIndex} Very High`
        }
        else if(uvIndex > 12){
            uvIndexHTML.innerHTML = `${uvIndex} Extreme`
        }
        conditionHTML.innerHTML = condition


    } catch (error) {
        alert("There's a error from the server", error)
        console.log("this is the err " + error)
    }
    return countryList
}

export async function getting_getAstronomy_API() {
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

// seachButton.addEventListener('click', async function(e) {
//     e.preventDefault()
//     const resutInput = inputCountry.value
//     try {
//         const result = await getting_getWeather_API(resutInput) 
//         return result       
//     } catch (error) {
//         alert("There's some error ", error)
//     }
// })

// button.addEventListener('click', async function(event) {
//     event.preventDefault();
//     const inputValue = input_getPlace.value
//     const inputResult = inputValue.toLowerCase()
//     console.log("this is the value ", inputResult)
    
//     try {
//         const result = await getting_getPlace_API_Input()
//         await getting_getPlace_API(inputValue) 
//         return result
//     } catch (error) {
//         console.log("There's an error")
//     }

//     try {
//         if (inputValue2) {
//             console.log("it works, this is the input value: " + inputValue2)
//             await getting_getWeather_API()
//         }
//     } catch (error) {
//         console.log("There's an error")
//     }
    

//     try {
//         if (inputValue3) {
//             console.log("it works this is the input value: " + inputValue3)
//             await getting_getAstronomy_API()       
//         }
//     } catch (error) {
//         console.log("there's an error")
//     }
    
    
// });