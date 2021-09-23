var textElement = null
var convertedText = null

function start(){
    document.getElementById("btn-to-slug").onclick = eventToSlug;
    document.getElementById("btn-to-camel-case").onclick = eventToCamelCase;
    document.getElementById("btn-to-pascal-case").onclick = eventToPascalCase;
    document.getElementById("btn-to-snake-case").onclick = eventToSnakeCase;
    textElement = document.getElementById("user-text");
    convertedText = document.getElementById("final-text");
}

function eventToPascalCase(){
    convertedText.innerText = toPascalCase(textElement.value)
}

function eventToCamelCase(){
    convertedText.innerText = toCamelCase(textElement.value)
}

function eventToSlug(){
    convertedText.innerText = toSlug(textElement.value)
}

function eventToSnakeCase(){
    convertedText.innerText = toSnakeCase(textElement.value)
}

function toPascalCase (text){
    let finalText = ""
    const textArray = text.split(" ") 
    for (word of textArray){
        const newWord = word[0].toUpperCase() + word.slice(1).toLowerCase()
        finalText = finalText + newWord
    }
    return finalText
}

function toCamelCase (text){
    let finalText = ""
    const textArray = text.split(" ") 
    textArray.forEach(function (word, index){
        if (index != 0){
            const newWord = word[0].toUpperCase() + word.slice(1).toLowerCase()
            finalText = finalText + newWord
        } else {
            finalText = word.toLowerCase()
        }
    });  
    return finalText
}

function toSnakeCase (text){
    return text.toUpperCase().split(' ').join('_')
}

function toSlug(text){
    return text.toLowerCase().split(' ').join('-')
}

start()
