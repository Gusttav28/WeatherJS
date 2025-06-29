import { getting_getPlace_API, getting_getPlace_API_Input, getting_getWeather_API } from "./app.js";

const input_getPlace = document.getElementById("inputPlace")
const seachButton_modal2 = document.getElementById("seachButton_modal2")
const jsonRegion = document.getElementById("JsonRegion")
const jsonRegion_Result = document.getElementById("jsonRegion_Result")
const buttonClose = document.getElementById("buttonClose")
const buttonXclosed = document.getElementById("buttonXclosed")


seachButton_modal2.addEventListener('click', async (e) => {
    e.preventDefault()
    const inputResult = input_getPlace.value 
    try {
        const result = await getting_getWeather_API(inputResult)
        const city = result[0]
        const region = result[1]
        const lat = result[2]
        const lon = result[3]
        const localtime = result[4]
        const tempeture = result[5]
        jsonRegion.innerHTML = "Region:"
        jsonRegion_Result.innerHTML = region
        return result
    } catch (error) {
        return "theres an err: ", error
    }
})

buttonClose.addEventListener("click", (e) => {
    e.preventDefault()
    input_getPlace.value = ""
    jsonRegion_Result.innerHTML = ""
})

buttonXclosed.addEventListener("click", (e) => {
    e.preventDefault()
    input_getPlace.value = ""
    jsonRegion_Result.innerHTML = ""
})