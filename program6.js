function capitalizeFirstLetterOfEachWord(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


const sentence = "hello world! this is a test.";
const capitalizedSentence = capitalizeFirstLetterOfEachWord(sentence);
console.log(capitalizedSentence); 
