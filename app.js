// var btnTranslate = document.querySelector("#btn-translate");
// var inputtext = document.querySelector("#txt-input");
// var outputtext = document.querySelector("#output");

// var serverUrl = "https://api.funtranslations.com/translate/minion.json"

// function getTranslationUrl(input){
//     return serverUrl+"?text="+input;
// }

// function showTranslation(json){
//     outputtext.innerText=json.contents.translated;
// }

// function errorHandler(error){
//     alert("Please try again! /n ERROR DETAILS : " + error)
// }

// function clickHandler(){
//     var textInput = inputtext.value;

//     fetch(getTranslationUrl(textInput))
//     .then(response => response.json())
//     .then(json =>showTranslation(json))
//     .catch(errorHandler)
// };
// console.log(clickHandler);
// btnTranslate.addEventListener("click", clickHandler);

let btnTranslate = document.querySelector("button");
let textInput = document.querySelector("#txt-input");
let outputMsg = document.querySelector("#output-msg");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function constructUrl(inputText) {
  return serverURL + "?" + "text=" + inputText;
}

function errorHandler(error) {
  console.log("error occurred", error);
  alert(
    "Oops!! Looks like something's wrong with server. Please try again after some time"
  );
}

function clickHandler() {
  var inputText = textInput.value;

  fetch(constructUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      outputMsg.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);

