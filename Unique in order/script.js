function uniqueInOrder(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            result.push(str[i])
        }
    }
    return result;
}
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1,2,3]