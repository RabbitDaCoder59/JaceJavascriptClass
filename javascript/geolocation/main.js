// static Loaction
// navigation.geolocation.getcurrentposition((coords) => {
// console.log(coords)
//})
const key = "AIzaSyCZb7p-LgoY3pthKC-Fn7d7CXymJR97ta8"
// Moving locations
navigator.geolocation.watchPosition(({coords}) =>{
    const latitude = coords.latitude
    const longitude = coords.longitude
    const Image = document.querySelector("#map")
    const imageLink = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&format=gif&zoom=14&size=400x400&key=${key}`
    Image.src = imageLink
    console.log(Image,latitude,longitude)
}, (err) => console.log(err),{ enableHighAccuracy:true })