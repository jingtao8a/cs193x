function main() {
    var arr = [];
    for (let i = 0; i < 5; ++i) {
        arr[i]  = function() {console.log(i); };
    }
    return arr;
}


var arr = main()

for (let i of arr) {
    i();
}