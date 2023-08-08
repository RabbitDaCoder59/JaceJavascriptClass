// ASYNC & AWAIT


// Making request to text file
// Making Request with fetch
// Fetch() Request
fetch("./text.txt")
// two .then() required
.then(function(request){
    return request.text();
}).then(function(result){
    console.log(result)
})

// making request to json file
fetch("./file.json")
.then((request) => {
    return request.json();
}).then((result) => {
    console.log(result)
    console.log(result.name)
    console.log(result.favplace)
    console.log(result.favcolor)
})

// async and await
async function makeRequest(){
    let request = await fetch("./text.txt")
    let result = await request.text()
    console.log("async method:",result)
}

makeRequest()

async function fetchReq(){
    let request = await fetch("./file.json")
    let result = await request.json()
    console.log("async method:",result)
}
fetchReq()
