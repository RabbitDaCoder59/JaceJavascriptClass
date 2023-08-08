// Date Class


// Instanciating a new date object
const date = new Date()
console.log(date)

// Year
// getFullYear()
const year = date.getFullYear()
console.log(year)

// Months
// getMonth()
const month = date.getMonth()
console.log(month)

// Date 
const dayOfMonth = date.getDate()
console.log(dayOfMonth)

// Day
const  day = date.getDay()
console.log(day)

// Hour
const Hours = date.getHours()
console.log(Hours)

// Minutes
const Minutes = date.getMinutes()
console.log(Minutes)

// seconds
const Seconds = date.getSeconds()
console.log(Seconds)

// Milliseconds
const Milliseconds = date.getMilliseconds()
console.log(Milliseconds)

// Creating a date
//  const val =  new Date("feb 14 2023")
// const val =  new Date("2023-02-14")
const val =  new Date("2023/02/14")
// Date.parse() -> Returns the timestamp of a given date
const timestamp = Date.parse("2023 feb 14")
console.log("timestamp =>",timestamp )

// Date.now() -> returns a timestamp of the moment
const valDate = new Date(timestamp)
console.log("This The Valdate",valDate)
// formatting  a date


const VAL_DATE = new Date(val)
const  days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sarturday"]
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

const DAY = days [VAL_DATE.getDay()]
const MONTH = months [VAL_DATE.getMonth()]
const value = `${DAY} ${VAL_DATE.getDate()}, ${MONTH} ${VAL_DATE.getFullYear()}`

console.log(value)


const Myvalue = `${MONTH} ${VAL_DATE.getDate()} ${VAL_DATE.getFullYear()}`
console.log(Myvalue)

const MyvalueTwo = `${VAL_DATE.getFullYear()} ${VAL_DATE.getDate()} ${MONTH}`
console.log(MyvalueTwo)


function getMeDateFormatt(){
    const MyDateTime = new Date()
    const fullYear = MyDateTime.getFullYear()
    const dateNum =  MyDateTime.getDate()
    const weeks = days [MyDateTime.getDay()]
    const MyMonths = months [MyDateTime.getMonth()] 
    const TheValue = `${weeks} ${dateNum} ${MyMonths}  ${fullYear}`
    console.log(TheValue)   
}

getMeDateFormatt()

