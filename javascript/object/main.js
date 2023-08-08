
// OBJECT
// They are used to store value in a key/value pair manner. each key/value pair is seperated with a comma [,].

//SYNTAX
//Object Literals = {}

const person = {
    fristname: 'edeh',
    lastname: 'chinedu',
    age: 20,
    isMarried: true,
    viruses: null,
     walking()
 {
     console.log("another banger!!!");
     console.log(person.age)
 }
 

}
console.log(person);
person.walking()

 // CLASSWORK
 
const score = {
    eng:10,
    math:30,
    che:78,
    phy:60,
    subj(){
        console.log("subj");
    }
}
console.log(score);
    //CREATING DYNAMIC OBJECTS

   let  ENG = 30, MATH = 40, CHE = 50, PHY = 60
   const scores = {
    ENG, 
    MATH ,
    CHE,
     PHY,
     sub(){
         console.log("sub");
     }
    }
    console.log(scores);


    // console.log(ageObj);
    const anotherObj = {
        [ENG]:"this is the score",
        testing(){
            console.log("hey !! , i'm working");
        }
    }
    console.log(anotherObj);

    // ACCESSING PROPERTIES OF AN OBJECT
    // D - B
    // D -> DOT (.) [property accessor operator]
    // B -> squares brackets

    //DOT
    console.log("english score => ", scores.ENG);
    console.log("math score => ", scores.MATH);
    console.log("phy score => ", scores.PHY);
    anotherObj.testing()


    // SQUARE BRACKET
    console.log("for che", scores.CHE)
    anotherObj['eng']
    scores.CHE


    // DESTRUCTURING
    const {eng , math} = score
    console.log("english => ", eng, "maths =>", math);


    //  MODIFYING AN OBJECT
    scores["CIVIC"] = 80
    console.log(scores);

    const animalObj ={
        tail: 1,
        eyes: 2,
        // head:2
    }

    //SPREAD [...]
    // spread means copying one object into another
    const animal = {
        ...animalObj, // if 
        head:1,
        legs:4
        

    }
    console.log(animal) // result object {tail: 1, eyes: 2} head:1,legs:4 }
    
    // REFERENCING IN OBJECTS
    const courses = {
        web: "PHP | SQL| HTML",
        app: "JAVA | DART , JAVASCRIPT"
    }
    const ref = {...courses}
    ref.web = "NODE | REACT | JAVASCRIPT"
    courses['newItem'] = "NEW STUFF"

    //TIPS:
    // When a variable is assigned to an [already created] object, the properties of the two objects now are Linked. this means that when any of them changes, the other changes too

    // to prevent these type of behaviour, you can use the SPREAD operator to copy the value of the other object

    console.log("<<<==============>>> REFERENCING [ref]<<<=========>>>");
    console.log(ref);


    console.log("<<<==============>>> REFERENCING [courses]<<<=========>>>");
    console.log(courses);
    anotherObj.testing()

    const car = {
        headlight:2,
        tyre: 4,
        windscreen: 2,
        wheel: 1,
        paint: "BLACK",
        airCondition : true,
        call(){
            console.log(car)
        }


    }
    console.log(car)


    car.call()

    // Alias in Destructuring
    const age = 50
    const value = "react"

    const myObj = { age , value}
    // Using alias to rename a variable [property-key]

    const {age:myOtherAge, value:myOtherValue} = myObj
    console.log(myOtherAge)
    console.log(myOtherValue)

    //Using alias to destructuring a nested object
    myObj["mark"] = {
        english: 30,
        maths:58
    }
    // console.log(myObj)
    const {mark : {english:newEnglish}} = myObj
    console.log( newEnglish)

    //          TYPES OF OBJECT METHODS
    // OBJECT METHODS
     // object.keys()-> returns an array of keys in the object
     // object.values() -> returns an array of values in the object
     // object.entries() -> returns a multi-dimensional array of both the key and vales

const myKeys = Object.keys(myObj)
 console.log("keys =>", myKeys)
 const myValue = Object.values(myObj)
 console.log("values =>", myValue)
 const myEntries = Object.entries(myObj)
 console.log("entries =>", myEntries)

 // INBUILT OBJECT
 console.log(window)

 // window 
 // Prompt()
 // prompt is used to accept an input from a user (deprecated)

//  const name = prompt("please enter your name ")
//  alert("welcome!!"+ name)
//console
// console.table() -> It's used to print arrays and objects
const __obj = {
    class: "JS",
    batch: "Batch 9",
    number: 15
}
console.table(__obj)
// console.dir()
console.dir(__obj)
// console.group() & console.groupEnd()
console.group("STRINGS")
console.log("string 1")
console.log("string 2")
console.log("string 3")
console.groupEnd()
console.group("NUMBERS")
console.log("number 1")
console.log("number 2")
console.log("number 3")
console.groupEnd()
// console.error()
console.error("THIS IS AN ERROR MESSAGE")
// console.info()
console.info("this is  the info")
// console.warn()
console.warn("this is a warn message")
// console.clear()
// console.clear()


// you  can  style the console
console.log("%c this is my  message", "color: red;")

        // document

        //.write() --> It writes some text to the document[body]
            document.write("<h2>This is my document object</h2>")
        // .body() --> return the body element of the document
        // console.log("body -->", document.body)
        // .querySelector()
        const h1Element = document.querySelector("#my-title")
        console.log(h1Element)
        const h3Element = document.querySelector(".second-title")
        h3Element.innerHTML = "This the innerHtml"
        const listElement = document.querySelector("li")
        console.log("list Element ->", listElement)
        // .querySelectorAll()
        const listElements = document.querySelectorAll("li")
        console.log("list Elements ->", listElements)
        // .getElementById()
        const idElement = document.getElementById("the-Id")
        console.log("idElement",idElement)
        // .getElementByClassName()
        const classElement = document.getElementsByClassName("my-class")
        console.log("classElement",classElement)
        // .getElementByTagName()
        const tagElement = document.getElementsByTagName("p")
        console.log("tagElement",tagElement)


        // navigator
        // .appVersion
        // It return the name of the browser the user is using
        const userBrowser = navigator.userAgent
        console.log(userBrowser)
        // .userAgent
        // .clipboard
        // - .writeText()
    //     window.onclick = function() {
    //         navigator.clipboard.writeText("this is the text")
    //         .then(() => {
    //                     alert("TEXT COPIED TO CLIPBOARD")
    //         })
    //     }
    //    navigator.clipboard.readText()
    //    .then((text) => {
    //     console.log("THE CLIPBOARD TEXT IS -> ", text)
    //    })
        // .geolocation
        navigator.geolocation.getCurrentPosition(function(coords){
            console.log(coords)
            const latitude = coords.latitude
            const longitude = coords.longitude

            console.log(latitude)
            console.log(longitude)
        })
        // .mediaDevices
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then((stream)=>{
            const videoElement = document.querySelector("video")
            videoElement.srcObject = stream
            videoElement.onloadedmetadata = () => {
                videoElement.play()
                video.muted = true
            }
        })


        // confirm()



        // prompt()
        // alert()