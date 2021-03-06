'use strict'

/*Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/
console.log("EJERCICIO 1")

let testWord = "esternocleidomastoideo"

function wordCutter(word) {

    word = word.split("")
    console.log(word)

    let random = word
        .map(item => ({
            item,
            sort: Math.random()
        }))
        .sort((a, b) => a.sort - b.sort)
        .map(({
            item
        }) => item)

    console.log(random)

}

console.log(wordCutter(testWord))

console.log("////////////////////////////")

/*Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/
console.log("EJERCICIO 2")

let testTargetWordA = "Sabrosura"
let testTargetWordB = "Sazón"
let testTargetWordC = "Tempurado"
let testWordsList = [
    "Sabr0sura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
]

// pruebe para cada palabra A, B y C

function wordSearcherIgnoreCase(targetWord, wordsList) {
    let minusList = wordsList.map(element => element.toLowerCase())
    targetWord= targetWord.toLowerCase()
    targetWord= normalizeString(targetWord)
    console.log(minusList)
    console.log(minusList.some(element => targetWord.toLowerCase() === element ))
}

function normalizeString (targetWord) {
    return targetWord = targetWord.normalize ("NFD").replace(/[\u0300-\u036f]/g,"")
}
wordSearcherIgnoreCase(testTargetWordA,testWordsList)
wordSearcherIgnoreCase(testTargetWordB,testWordsList)
wordSearcherIgnoreCase(testTargetWordC,testWordsList)

console.log("////////////////////////////")

/*Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/
console.log("EJERCICIO 3")

let testSampleList = [
    "Capitan",
    "Comandante",
    "Teniente",
    "Cabo",
    "Brigadier",
    "Coronel",
    "Zar",
]

function wordLengthClassifier(wordsList) {
    let todasLasLetras = 0
    wordsList.forEach(word => todasLasLetras += word.length)
    const averageSize = todasLasLetras / wordsList.length

    const sortedWords = wordsList.sort((a, b) => {
        if(a.length < b.length) {
            return -1
        } else if(a.length > b.length) {
            return 1
        } else {
            return 0
        }
    })

    return {
        averageSize,
        shortest: sortedWords[0],
        longest: sortedWords[sortedWords.length - 1],
    }
}
console.log(wordLengthClassifier(testSampleList))

console.log("////////////////////////////")

/*Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/
console.log("EJERCICIO 4")

let onVerificationWordA = "reconocer"
let onVerificationWordB = "querer"
let onVerificationWordC = "Gomosos"
let onVerificationWordD = "Somos"

function palindromeVerifier(word) {
    return word.split('').reverse().join('') == word
}

console.log(palindromeVerifier('reconocer'))
console.log(palindromeVerifier('querer'))
console.log(palindromeVerifier('Gomosos'))
console.log(palindromeVerifier('Somos'))

console.log("////////////////////////////")

/*Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/
console.log("EJERCICIO 5")

let contarVocales
let contarConsonantes
let containerTestObject = {
    list: ["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}

function lettersCounter(texto) {
    for (let i = 0; i < texto.length; ++i) {
        if (containerTestObject.indexOf(texto[i]) >= 0) {
            ++contarVocales
        }

        for (let j = 0; j < texto.length; ++j) {
            if (containerTestObject.indexOf(texto[j]) >= 0) {
                ++contarConsonantes
            }
        }
        return contarConsonantes
    }
    return contarVocales
}

console.log(lettersCounter(containerTestObject))

console.log("////////////////////////////")

/*Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
console.log("EJERCICIO 6")

let arrayA = ["hola", "¿" ,"cómo", "estás", "?"];
let arrayB = ["te", "ves" ,"igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
    const lists = listA.concat(listB)
    console.log(lists)
}
arrayJoiner(arrayA, arrayB)

console.log("////////////////////////////")

/*Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/
console.log("EJERCICIO 7")

let testWordToExplore = "amar"
let wordsToVerify = ["amar", "arma", "rana", "mara", "rama", "roma", "amor", "ramon", "omar"]

function anagramVerifier(wordToExplore, listOfWords) {
}

console.log("////////////////////////////")

/*Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/
console.log("EJERCICIO 8")

let testObjMultiContainer = {
    listA: ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB: ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
}

function vocalsRemoverFromObject(objectMultiContainer) {
    let ambos = objectMultiContainer.listA.concat(objectMultiContainer.listB)
    const resultado = []

    for (let i = 0; i < ambos.length; i++) {
        const palabra = ambos[i].split('')
        for (let index = 0; index < ambos[i].length; index++) {
            if (palabra[index] === "a" || palabra[index] === "e" || palabra[index] === "i" || palabra[index] === "o" || palabra[index] === "u") {
                palabra.splice(index, 1)
            }
        }
        resultado.push(palabra.join(''))
    }
    console.log(resultado)
}

console.log(vocalsRemoverFromObject(testObjMultiContainer))

console.log("////////////////////////////")

/*Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/
console.log("EJERCICIO 9")

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"]

function lastVocalReplacer(words) {
}

console.log("////////////////////////////")

/*Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/
console.log("EJERCICIO 10")

let testListA = ["amor", "sabor", "calor", "firma", "mara"]
let testListB = ["roma", "robar", "portar", "arma", "mora"]

function doubleListVerifier(listA, listB) {
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("EJERCICIO 5 segunda opción");

function numeroVocales(texto) {
    let contarVocales = 0;
    let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for (let i = 0; i < texto.length; ++i) {
        if (vocales.indexOf(texto[i]) >= 0) {
            ++contarVocales
        }

    }
    return contarVocales;
}
console.log(numeroVocales('oso'))
console.log(numeroVocales('lateleletal'))
console.log(numeroVocales('revolver'))
console.log(numeroVocales('reconocer'))
console.log(numeroVocales('somos'))
console.log(numeroVocales('hola,somos'))

function numeroConsonantes(texto) {
    let contarConsonantes = 0;
    let consonantes = ['t', 'g', 'b', 'T', 'G', 'B']

    for (let i = 0; i < texto.length; ++i) {
        if (consonantes.indexOf(texto[i]) >= 0) {
            ++contarConsonantes
        }

    }
    return contarConsonantes
}
console.log(numeroConsonantes('oso'))
console.log(numeroConsonantes('lateleletal'))
console.log(numeroConsonantes('revolver'))
console.log(numeroConsonantes('reconocer'))
console.log(numeroConsonantes('somos'))
console.log(numeroConsonantes('hola,somos'))