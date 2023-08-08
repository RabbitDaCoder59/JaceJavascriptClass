

// setInterval(cb, timer)
// let counter = 1
// const id = setInterval(myFunc,200)

// function myFunc (){
//     counter += 1;
//     if(counter == 100) clearInterval(id)
//     document.body.innerHTML = counter
// }

// let count = 20
// const final = setInterval(func,200)

// function func(){
//     count -= 1;
//     if (count == 0) clearInterval(final)
//     document.body.innerHTML = count
// }



//clearInterval(interval ID)


// setTimeout(cb, timer)
// setTimeout(() => {
//     alert("Hello World")

// }, 6000)


// Promises

let asynData = new Promise ((resolve, reject) => {
    // if(1) {
    //     reject("Something Went Wrong")
    // }

    setTimeout(() => {
        resolve("This is a Promise")
    },3000)
})

// Chain Rule

// asynData.then( function (data) {
//     console.log(data)
// })

// .catch(err => {
//     console.log("Error", err)
// })

// Async / Await 

// const getResponse = async () => {
//     const data = await asynData
//     console.log(data)
// }

// getResponse()
// .catch(err => {
//     console.log(err)
// })

// fetch() - API

// const getJSONData = async () => {
//     const request = await fetch("./data.json")
//     const data = await request.json()
    
//     const H1Element = document.createElement("h1")
//     H1Element.innerHTML = data.app
//     document.body.appendChild(H1Element)

//     const pElement = document.createElement("p")
//     pElement.innerHTML = data.description
//     document.body.appendChild(pElement)

//     const divElement = document.createElement('h2')
//     divElement.innerHTML = data.author1
//     document.body.appendChild(divElement)

//     const divElement1 = document.createElement('h2')
//     divElement1.innerHTML = data.book1
//     document.body.appendChild(divElement1)

//     const spanElement = document.createElement('h1')
//     spanElement.innerHTML = data.author
//     document.body.appendChild(spanElement)

//     const spanElement1 = document.createElement('h1')
//     spanElement1.innerHTML = data.book
//     document.body.appendChild(spanElement1)
    
//     const  h4Element = document.createElement('h4')
//     h4Element.innerHTML = data.version
//     document.body.prepend(h4Element)
// }
// getJSONData()
const getImageFile  = async () => {
 const req = await fetch("./tall-2.jpg")
 const blob = await req.blob()
 
 const url =  URL.createObjectURL(blob)

 // create image

 const imageElem = new Image(500,600)
 imageElem.src = url

 document.body.appendChild(imageElem)
}


getImageFile()


// Creating a libary async
const getLibary = async () => {
    const getRequest = await fetch("./libary.json")
    const response = await getRequest.json()
     
    // To Create My Element
    const h1Obj = document.createElement('h1')
    h1Obj.innerHTML = response.App
    document.body.appendChild(h1Obj)
    
    const divElement = document.createElement('h2')
     divElement.innerHTML = response.author1
     document.body.appendChild(divElement)
    
     const divElement1 = document.createElement('h2')
     divElement1.innerHTML = response.book1
     document.body.appendChild(divElement1)
    
     const spanElement = document.createElement('h1')
     spanElement.innerHTML = response.author
     document.body.appendChild(spanElement)
    
     const spanElement1 = document.createElement('h1')
     spanElement1.innerHTML = response.book
     document.body.appendChild(spanElement1)
        
     const  h4Element = document.createElement('h4')
     h4Element.innerHTML = response.version
     document.body.prepend(h4Element)

     const MyH1 = document.createElement('h1')
     MyH1.innerHTML = response.description
     document.body.prepend(MyH1)

}

getLibary()





