import { getting_getPlace_API, getting_getPlace_API_Input, getting_getWeather_API } from "../app.js";

const input_getPlace = document.getElementById("inputPlace")
const seachButton_modal2 = document.getElementById("seachButton_modal2")
const jsonRegion = document.getElementById("JsonRegion")
const jsonRegion_Result = document.getElementById("jsonRegion_Result")
const searchButtonModal1 = document.getElementById("searchButtonModal1")
const buttonXclosed = document.getElementById("buttonXclosed")

const inputCountry = document.getElementById("inputCountry")
const countryModal2Label = document.getElementById("countryModal2Label")
const tempetureHTML2 = document.getElementById("tempetureHTML2")
const windHTML2 = document.getElementById("windHTML2")
const humidityHTML2 = document.getElementById("humidityHTML2")
const conditionHTML2 = document.getElementById("conditionHTML2")
const uvIndexHTML2 = document.getElementById("uvIndexHTML2")


function showLoader() {
    document.getElementById("loading").style.display = "block"
    document.getElementById("loading2").style.display = "block"
    document.getElementById("loading3").style.display = "block"
    document.getElementById("loading4").style.display = "block"
    windHTML2.style.display = "none"
    humidityHTML2.style.display = "none"
    conditionHTML2.style.display = "none"
    uvIndexHTML2.style.display = "none"

    setTimeout(() => {
        document.getElementById("loading").style.display = "none"
        document.getElementById("loading2").style.display = "none"
        document.getElementById("loading3").style.display = "none"
        document.getElementById("loading4").style.display = "none"
        windHTML2.style.display = "block"
        humidityHTML2.style.display = "block"
        conditionHTML2.style.display = "block"
        uvIndexHTML2.style.display = "block"
    }, 800);
}


seachButton_modal2.addEventListener('click', async (e) => {
    e.preventDefault()
    const inputResult = inputCountry.value 
    try {
        showLoader()
        const result = await getting_getWeather_API(inputResult)
        const city = result[0]
        const tempeture = result[5]
        const wind = result[6]
        const humidity = result[7]
        const uvIndex = result[8]
        const condition = result[9]
        countryModal2Label.innerHTML = city
        tempetureHTML2.innerHTML = `${tempeture}°`
        windHTML2.innerHTML = `${wind} km/h`
        humidityHTML2.innerHTML = `${humidity}%`
        if(uvIndex <= 2){
            uvIndexHTML2.innerHTML = `${uvIndex} Low`
        }
        else if(uvIndex > 2 && uvIndex < 6){
            uvIndexHTML2.innerHTML = `${uvIndex} Moderate`
        }
        else if(uvIndex > 5 && uvIndex < 8){
            uvIndexHTML2.innerHTML = `${uvIndex} High`
        }
        else if(uvIndex > 7 && uvIndex < 11){
            uvIndexHTML2.innerHTML = `${uvIndex} Very High`
        }
        else if(uvIndex > 12){
            uvIndexHTML2.innerHTML = `${uvIndex} Extreme`
        }
        conditionHTML2.innerHTML = condition
        

        return result
    } catch (error) {
        alert("There's a error from the server", error)
        console.log("this is the err " + error)
    }
})

searchButtonModal1.addEventListener("click", (e) => {
    e.preventDefault()
    inputCountry.value = ""
    countryModal2Label.innerHTML = ""
    tempetureHTML2.innerHTML = ""
    windHTML2.innerHTML = ""
    humidityHTML2.innerHTML = ""
    uvIndexHTML2.innerHTML = ""
    conditionHTML2.innerHTML = ""
})

// buttonXclosed.addEventListener("click", (e) => {
//     e.preventDefault()
//     input_getPlace.value = ""
//     jsonRegion_Result.innerHTML = ""
// })