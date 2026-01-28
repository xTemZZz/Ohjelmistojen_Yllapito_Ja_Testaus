const {add, sub, divide, multiply }  = require("./mylib.js");

function main() {
    console.log(`1 + 2 = ${add(1,2)}`);
    console.log(`7 - 5 = ${sub(7,5)}`);
    console.log(`8 / 4 = ${divide(8,4)}`);
    console.log(`6 * 6 = ${multiply(6,6)}`);
};

if (require.main === module){
    main();
}