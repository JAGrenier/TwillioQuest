function getFirstAmountSorted (newArray, n){
    newArray.sort()
    return newArray.slice(0,n)
}

const newArray = getFirstAmountSorted(['cat', 'apple', 'bat'], 2);
console.log(newArray);