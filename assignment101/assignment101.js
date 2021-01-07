'use strict';

// Solution
// Bonus Part
const bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};
const A = [ 1,3,5,10]
const B =  [2, 4, 5 ,6]

const operator = function(A, B, operation){
    let outPutArray = [];   
    switch(operation){
        case "OR":
            // using two loops (if in case size of both array are different)
            // for all distinct element of Array A
            for(let i=0;i<A.length;i++){
                if(!outPutArray.includes(A[i])) outPutArray.push(A[i]);
            }
            // for all distinct element of Array B
            for(let i=0;i<B.length;i++){
                if(!outPutArray.includes(B[i])) outPutArray.push(B[i]);
            }
            // Bonus
            outPutArray = bubbleSort(outPutArray);
            console.log(`Array Operation ${operation} has been performed on Array [${A}] of size:${A.length} and Array [${B}] of size:${B.length} and Output Array is [${outPutArray}] of size:${outPutArray.length}`);
        break;
        case "MINUS":
            for(let i=0;i<A.length;i++){
                if(!B.includes(A[i])) outPutArray.push(A[i]);
            }
            console.log(`Array Operation ${operation} has been performed on Array [${A}] of size:${A.length} and Array [${B}] of size:${B.length} and Output Array is [${outPutArray}] of size:${outPutArray.length}`);
        break;
        case "AND":
            for(let i = 0;i<A.length ; i++){
                if(B.includes(A[i])) outPutArray.push(A[i]);
            }
            console.log(`Array Operation ${operation} has been performed on Array [${A}] of size:${A.length} and Array [${B}] of size:${B.length} and Output Array is [${outPutArray}] of size:${outPutArray.length}`);
        break;
    }
}

operator(A,B,'OR');
operator(A,B,'MINUS');
operator(A,B,'AND');

