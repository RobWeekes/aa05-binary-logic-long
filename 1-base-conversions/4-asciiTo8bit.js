const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => {
    let base10;
    let result = '';
    let binary;
    for(let i = 0; i < str.length; i++) {
        base10 = str.charCodeAt(i);
        console.log(base10);
        binary = base10.toString(2);
        console.log(binary);
        let binaryString = addZeros(binary, 8);    
        result += binaryString;
    }
    console.log(result);
    return result;
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
