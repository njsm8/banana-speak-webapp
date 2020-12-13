var btnTranslate = document.querySelector("#btn-translate");
var inputtext = document.querySelector("#txt-input");
var outputtext = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(input){
    return serverUrl+"?text="+input;
};

function errorHandler(error){
    alert("Please try again! /n ERROR DETAILS : " + error)
};

function clickHandler(){
    var textInput = inputtext.value;

    fetch(getTranslationUrl(textInput))
    .then(response => response.json())
    .then(json =>{ 
        var translatedText = json.contents.translated;
        outputtext.innerText = translatedText})
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);