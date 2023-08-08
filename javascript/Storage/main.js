
// STORAGE IN JS

// - LOCAL STORAGE  - stays for a long period of time

// - SESSION STORAGE - Ends when the page session end (i.e when you leave the site)

// Creating an item in a storage

// .setItem(key, value) -> It's used to add a new item to the storage
const name = " John Smith"
localStorage.setItem("MAIN_USER", name)
const person = "Edeh Chinedu"
localStorage.setItem("Person", person)


//. getItem(key) -> It returns the value of the saved item with the specified key, If the key does not exsit it returns null.
const value = localStorage.getItem("MAIN_USER")
console.log(value)
const Deperson = localStorage.getItem("Person")
console.log(Deperson)

// .removeItem(key) -> It removes that item with the corresponding key from the storage
localStorage.removeItem("Person")

const Edu = {
    name: "Edeh Chinedu",
    id: "001",
    car: "Ferrari"
}

const MYarray = ["Edu", " chinedu"]
localStorage.setItem("MYarray", JSON.stringify(MYarray))
localStorage.setItem("Edu", JSON.stringify(Edu))

// .clear() -> remove all items in the storage
localStorage.clear()

// .length
console.log("ITEMS =>", localStorage.length)