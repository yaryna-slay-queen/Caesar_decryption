const stringToEncrypt = `Hello, World!`
let key = 53
function caesarCode (text, key) {
    const engAlphabet = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,
                `o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`,`A`,`B`,
                `C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,
                `Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`, '']

let result = ' '
console.log(engAlphabet.length)
for (let i = 0; i < text.length; i++) {    
    const newIndex = (engAlphabet.indexOf(text[i]) + key) % engAlphabet.length
    result += engAlphabet[newIndex] 
}
    return result
}
const ciphering = caesarCode(stringToEncrypt, key)
console.log(ciphering)