// function main() {
//     var arr = [];
//     for (let i = 0; i < 5; ++i) {
//         arr[i]  = function() {console.log(i); };
//     }
//     return arr;
// }


// var arr = main()

// for (let i of arr) {
//     i();
// }

// class Test {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// var o = Test("yuxintao", 13);

// console.log(o)


export function hello() {
    console.log("hello")
}

export default function test2() {
    console.log("test2");
}

test2.hello = hello;
