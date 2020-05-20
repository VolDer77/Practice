const minArr = arr => {
    let newArr = arr.map(el => el);
    let smallestNumb = newArr.indexOf(Math.min(...newArr));
    newArr.splice(smallestNumb, 1);
    return newArr;
}
console.log(minArr([3,0,3,1,2,3,4,1]));