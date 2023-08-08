///     Assignment

// function

function CapitalizeFrist(letter){
        let arr = letter.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        let capitalize = arr.join(" ");
    
        console.log(capitalize)
}
CapitalizeFrist("my name is edeh chinedu");

function capLetter(str){
    let txt = str.split(" ").map((item) => {
       return item[0].toUpperCase() + item.slice(1);
    })
    let txt2 = txt.join(" ");
    console.log(txt2);

}
capLetter("my name is daniel")