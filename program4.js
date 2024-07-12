function areAnagrams(str1, str2) {
    const normalize = str => str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);

    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Example 
const string1 = "Listen";
const string2 = "Silent";

console.log(areAnagrams(string1, string2)); 
