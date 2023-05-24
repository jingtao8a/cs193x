// import test2 from "./test2.js"


// test2()

// test2.hello();


// obj = {
//     one:1,
//     two:2,
//     three:{
//         four:4,
//         five:5,
//         six:6
//     }
// }

let li1 = [1, 2, 5,3, 4];

li1.sort((lhs, rhs)=>{
    if (lhs < rhs) {
        return -1
    }
    if (lhs > rhs) {
        return 1;
    }
    return 0;
});

console.log(li1);