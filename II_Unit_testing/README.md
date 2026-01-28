# Unit Testing Projekti

## 📋 Projektin kuvaus

II Unit testing **Mocha** ja **Chai** -testauskehikoilla.

---

## 📁 Tiedostojen rakenne

### `mylib.js` - Funktioiden kirjasto

- **`add(a, b)`** - Laskee kahden luvun summan
- **`sub(a, b)`** - Laskee kahden luvun erotuksen
- **`multiply(a, b)`** - Laskee kahden luvun tulon
- **`divide(a, b)`** - Laskee kahden luvun osamäärän (heittää virheen jos jakaja on 0)

**Koodi:**
```javascript
function add(a, b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if (b === 0 ){
        throw new Error ("Divisor 0 Error!");
    }
    return a / b;
}

module.exports = {add, sub, multiply, divide};
```

### `main.js` - Pääohjelma
Tuodaan funktiot `mylib.js`:stä ja testataan niitä.

**Koodi:**
```javascript
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
```

**Tuloste:**
```
1 + 2 = 3
7 - 5 = 2
8 / 4 = 2
6 * 6 = 36
```

### `__test__/mylib.test.js` - Yksikkötestit
Sisältää testit kaikille funktioille **Mocha** ja **Chai** -kirjastoilla.

**Koodi:**
```javascript
const { expect } = require("chai");
const {add, sub, divide, multiply }  = require("../mylib.js");

describe("mylib.js functions \n", function () {

    before(function () {
        console.log("Starting test suite.")
    });

    after(function () {
        console.log("Finished test suite.")
    })
  describe("add()", function () {
    it("add should return correct sum", function () {
      expect(add(2,6)).to.equal(8);
    });
  });

  describe("#sub()", function () {
    it("sub should return correct difference", function () {
        expect(sub(7,3)).to.equal(4);
    })
  });

  describe("#multiply()", function (){
    it("multiply should return corrrect product", function() {
        expect(multiply(5,5)).to.equal(25);
    });
  })

  describe("#divide()", function () {
    it("divide should throw error on zero divisor", function () {
        expect(() => divide(10,0)).to.throw("Divisor 0 Error!");
    });
    it("divide should return corret quotient", function () {
        expect(divide(8,4)).to.equal(2);
    })
  })
});
```

---

## 🚀 Käyttöohjeet

### 1. Pääohjelman ajaminen
```bash
node main.js
```

### 2. Testien ajaminen
```bash
npm test
```

---

## 🧪 Testien selitys

**`before()` ja `after()` hooks:**
- `before()` - Ajetaan ennen testejä
- `after()` - Ajetaan testien jälkeen

**`describe()` - Testisarjat:**
- Ryhmittelee testit funktion mukaan
- Esim. `describe("add()", function () {...})`

**`it()` - Yksittäiset testit:**
- Testaa yhden asian kerrallaan
- Esim. `it("add should return correct sum", function () {...})`

**`expect()` - Chai assertions:**
- Tarkistaa että tulos on oikea
- `.to.equal()` - Vertaa arvoja
- `.to.throw()` - Tarkistaa virheet

---

## ✨ Testitulosten selitys

```
✓ add should return correct sum
```
- `add(2,6)` palauttaa `8` ✅

```
✓ sub should return correct difference
```
- `sub(7,3)` palauttaa `4` ✅

```
✓ multiply should return corrrect product
```
- `multiply(5,5)` palauttaa `25` ✅

```
✓ divide should throw error on zero divisor
```
- `divide(10,0)` heittää virheen "Divisor 0 Error!" ✅

```
✓ divide should return corret quotient
```
- `divide(8,4)` palauttaa `2` ✅

---