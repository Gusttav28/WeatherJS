const url_getPlace = "http://127.0.0.1:8000/api/weather/get_place/"
const url_getWeater = "http://127.0.0.1:8000/api/weather/get_weather/"
const url_getWeater2 = "http://127.0.0.1:8000/api/weather/get_astronomy/"

export async function get_place(place) {
    const res = await fetch(`${url_getPlace}?q=${place}`)
    if(!res.ok){
        throw new Error(`http error, status: ${res.status}`);
        
    }
    const data = await res.json()
    console.log(data)
    return data;
}
export async function get_weather() {
    const res = await fetch(`${url_getWeater}?q=caracas`)
    if(!res.ok){
        throw new Error(`http error, status: ${res.status}`);
        
    }
    const data = await res.json()
    console.log(data)
    return data;
}

export async function get_astronomy() {
    const res = await fetch(`${url_getWeater2}?q=caracas`)
    if(!res.ok){
        throw new Error(`http error, status: ${res.status}`);
        
    }
    const data = await res.json()
    console.log(data)
    return data;
}




// get_place()
// get_weather()
// get_astronomy()
