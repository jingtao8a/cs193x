// let a = Object.create({name:"yuxintao"})
// console.log(a.__proto__.constructor)


var l = [1, 2, 3, 4]
// l.one = "hello"
var d = {one:1, two:2, three:3}
// d["one"] = 3
// console.log(d)

console.log(d.__proto__.constructor.values(d))