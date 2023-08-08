// DOM

const eroot = document.getElementById("root")
const  select = document.querySelector("select")
const textArea = document.querySelector("textarea")
const btn = document.querySelector("button")

console.log(eroot)
console.log(select)
console.log(textArea)
console.log(btn)

function ShowElementInPage() {
    // console.log("clicked")

        // get chosen element
        const elementType = select.value
        // get content
        const content = textArea.value

        //Add a check for the content
        if(!content.trim()){
            alert("You Entered an Empty content")
        }

        // Create new Element
        const newElement = document.createElement(elementType)
        newElement.innerHTML = content

        // attach an event to the element
        newElement.addEventListener("dblclick", removeElemntFromPage)

        // Add the new element to the Root Div
        eroot.appendChild(newElement)  
}

            // Removing element from dom
            function  removeElemntFromPage(event) {
                console.log("ITEM ->", event.target)
                event.target.remove()
            }

btn.addEventListener("click", ShowElementInPage)
// btn.addEventListener("click", function ShowLog() {
//     console.log("clicked")
// })
