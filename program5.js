
function removeDuplicates(array) {
    return [...new Set(array)];
}

// Example 
const arrayWithDuplicates = [1, 2, 3, 2, 4, 3, 5, 1];
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log(arrayWithoutDuplicates); 
