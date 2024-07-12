function flattenArray(nestedArray) {
    const result = [];

    function flatten(subArray) {
        for (const item of subArray) {
            if (Array.isArray(item)) {
                flatten(item);
            } else {
                result.push(item);
            }
        }
    }

    flatten(nestedArray);
    return result;
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6];
const flatArray = flattenArray(nestedArray);
console.log(flatArray); 
