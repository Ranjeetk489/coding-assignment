// Given an array const a = [1, 3, 5, 2, 4] generate an array result1 from a, which should be equal to [1, 5, 4]. The solution should be of the form: 


const result1 = (arr) => {
    let start=0, end = arr.length;
    let mid = start + Math.floor((end - start)/2)
    console.log( [arr[start], arr[mid], arr[end-1]])
    return [arr[start], arr[mid], arr[end-1]] 
}

result1([1, 3, 5, 2, 4])


// Given an array const a = [1, 3, 5, 2, 4]generate an array result2 from a, which should be equal to [1, 9, 25, 4, 16]. The solution should be of the form: 

const result2 = (arr) => {
    return arr.map(item => item * item)
}

console.log(result2([1, 3, 5, 2, 4]))

// Given an array const a = [1, 3, 5, 2, 4]generate an array result3 from a, which should be equal to [1, 25, 16]. The solution should be of the form: 
-

const result3 = (arr) => {
    let start=0, end = arr.length;
    let mid = start + Math.floor((end - start)/2)
    let tempArr =  [arr[start], arr[mid], arr[end-1]]
    return result2(tempArr) 
}

console.log(result3([1, 3, 5, 2, 4]))