const alph = 'abcdefghijklmnopqrstuvwxyz'.split('')

const decrypt = (encrypt, cipher) => //function start
    encrypt.split('').map(char => //map the characters in the encrypted string
        cipher.split('').indexOf(char) != -1 //does the character have an encryption index?
            ? alph[cipher.split('').indexOf(char)] //if so, substitute the char with og aplhabet
            : char //if not found, don't substitue the character (commas, spaces, etc)
    ).join('') //join the char array into a single string


const encrypt = (string, cipher) =>
    string.split('').map(char => 
        alph.indexOf(char) != -1 //does the character have an encryption index?
            ? cipher.split('')[alph.indexOf(char)] //if so, substitute the char with og aplhabet
            : char
    ).join('')

// cipher = 'oephjizkxdawubnytvfglqsrcm'
// encrypt = 'knlfgnb, sj koqj o yvnewju'

const encrypt1 = 'knlfgnb, sj koqj o yvnewju'
const cipher1 = 'oephjizkxdawubnytvfglqsrcm'


console.log(decrypt(encrypt1, cipher1))

module.exports = {
    decrypt,
    encrypt
}