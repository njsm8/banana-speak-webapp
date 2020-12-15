var btnTranslate = document.querySelector("#btn-translate");
var inputtext = document.querySelector("#txt-input");
var outputtext = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(input){
    return serverUrl+"?text="+input;
}

function showTranslation(json){
    outputtext.innerText=json.contents.translated;
}

function errorHandler(error){
    alert("Please try again! /n ERROR DETAILS : " + error)
}

function clickHandler(){
    var textInput = inputtext.value;

    fetch(getTranslationUrl(textInput))
    .then(response => response.json())
    .then(json =>showTranslation(json))
    .catch(errorHandler)
};
console.log(clickHandler);
btnTranslate.addEventListener("click", clickHandler);
