// const myQueue = Queue()
// myQueue.enqueue(1)
// myQueue.enqueue(2)

// const r1 = myQueue.dequeue() == 1
// const r2 = myQueue.dequeue() == 2

// console.log(r1 && r2)
// // Answer => ReferenceError: Queue is not defined


// async function apiCall() {
//     return new Promise(resolve => {
//         setTimeout(() => {resolve('b'), 50})
//     }) ;
// } ;

// async function logger() {
//         setTimeout(() => console.log('a'),10);
//          console.log(await apiCall()) ;
//          console.log('c')
   
// } ;
// logger() ;
// // Answer => bca

// let green ;
// grnee = false ;
// console.log(grnee)
// // Answer => compile this code into  es5 syntax


// const myArray = new Array(2) 

// myArray[1] = 1 ;
// myArray[3] = 3 ;

// console.log('length', myArray.length)

// console.log('Elements:')
// for(const element of myArray){
//     console.log('it', element)
// }

// // Anwer => length 4
// Elements:
// it undefined
// it 1
// it undefined
// it 3


// let sequenceChecker = (arr) => {

//     let finalNum = 0;
//     let secondPass = false;
  
//     const bigestNumber = arr.sort()[arr.length - 1]
   
//    arr.forEach(num => {
  
//     if(num === bigestNumber){
//        finalNum++  
//     }
  
//     else if(num != bigestNumber && finalNum > 0 ){
//        secondPass = true
      
//     }
  
//     else if (secondPass == true && num === bigestNumber){
//      finalNum = 0
//     } 
  
//    })
//     return finalNum
//   }
  
//   console.log((sequenceChecker([1,7,7,3])).toString());
  
//   console.log((sequenceChecker([1,7,7,3,9,9,9,4,9])).toString());


//   const mySet = new Set()
//   mySet.add(1)
//   mySet.add(1)
//   mySet.add('a')
//   mySet.add('a')
//   mySet.add('undefined')
//   mySet.add('undefined')
//   mySet.add({prop: true})
//   mySet.add({prop: true})
  
//  console.log('Size', mySet.size)

// // Answer => 5


const arr = [] ;
try{
    arr.push('try') ;
    throw new Error() ;
} catch (e) {
    arr.push('catch') ;
} finally {
    arr.push('finally')
} ;

console.log(arr)
// Answer => [ 'try', 'catch', 'finally' ]



































