const removeSmallest = arr => {
    let newArr = arr.map(el => el);
    let smallestNumb = newArr.indexOf(Math.min(...newArr));
    newArr.splice(smallestNumb, 1);
    return newArr;
}
console.log(removeSmallest([2,3,1,2,3,4])); //[2,3,2,3,4]