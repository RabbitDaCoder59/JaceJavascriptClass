let select = document.querySelectorAll('#currency')
let Myconvert = document.getElementById('converter')
let input = document.getElementById('input')
let result = document.getElementById('result')






// var myHeaders = new Headers();
// myHeaders.append("apikey","zMRIywenoQEtHlJgy6g07rjAuUnCwFlE");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch(`https://api.apilayer.com/fixer/convert?to=JPY&from=GBP&amount=25`, requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

let to = "NGN"
let from = "USD"
let amount = 100


var myHeaders = new Headers();
myHeaders.append("apikey", "zMRIywenoQEtHlJgy6g07rjAuUnCwFlE");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
// var myHeaders = new Headers();
// myHeaders.append("apikey", "{zMRIywenoQEtHlJgy6g07rjAuUnCwFlE}");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };



// const _URL = `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`
// fetch(_URL, requestOptions)
//   .then(data => data.json())
//   .then(data => {
//     display(data);
//     console.log(data)
//   });
  
  // function display(data){
  //   const entries = object.entries(data);
  //   for(let i = 0; i < entries.length;i++){
  //     select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}"</option>`
  //     select[1].innerHTML += `<option value="${entries[i][1]}">${entries[i][1]}"</option>`
  //   }
  // }

  // Myconvert.addEventListener("click", () => {
  //    let currency1 = select[0].value;
  //    let currency2 = select[1].value;
  //    let value = input.value;

  //    if(currency1 != currency2){
  //     convert(currency1,currency2,value);
  //    }else{
  //     alert("Please choose a different value !!!")
  //    }
  // });

  // function convert(currency1,currency2,value){
  //   const host = api.apilayer.com.fixer.app
  //   fetch(`https://${host}/convert?to=${currency2.value}&from=${currency1.value}&amount=${value}`)
  //   .then((val) => val.json())
  //   .then((val) => {
  //     console.log(object.values(val.rates)[0])
  //     result.value = object.values(val.rates)[0];
  //   })
  // }
 