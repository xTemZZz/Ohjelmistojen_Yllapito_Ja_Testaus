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

/*
Copyright 2026 Teemu Martikainen

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/