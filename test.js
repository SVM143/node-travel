// //Problem 1
// let str = "abccde"

// let prev = "";
// let prevLen = 0;
// let flag = false;

// for(let i = 0 ;i< str.length; i++){
    
//     let char = str.charAt(i) 
//     !prev.includes(char)?
//     (
//       prev = prev.concat(char)
//     )
//     : (
//       prevLen >= prev.length ? null :
//       (
//         flag = true,
//         prevLen = prev.length,
//         prev = "",
//         prev = prev.concat(char)
//       )
//     )
// }
// console.log("output :",flag ? prevLen : prev.length)



//problem 2

// let arr = [2,5,3,10];
// let count = 0;
// const target = 30;
// let str = ""
// for(let i = 0;i<arr.length;i++){
//   arr[i]< target ? (
//     count++,
//     console.log(arr[i]),
//     str = str.concat(arr[i]),
//     i+1 < arr.length && arr[i+1]*arr[i] < target ? (str = str.concat(" "+arr[i+1]),console.log(str),count++): null
//   ): null
//   str = ""
// }
// console.log("Number of Contiguous subarrays",count)



//problem 4
let arr = [[4,5],[2,4],[8,12]]
arr.sort()
arr.length ==1 ? console.log('true'):null
for(let i=1;i<arr.length;i++){
    if(arr[i][1]<arr[i-1][1] || arr[i][0]<arr[i-1][1]){
        console.log('false');
        break
    }
    else i == arr.length-1 ? console.log('true'):null
}


