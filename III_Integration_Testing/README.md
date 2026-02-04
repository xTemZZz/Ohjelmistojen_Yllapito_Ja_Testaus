# Integration Testing Projekti

## 📋 Projektin kuvaus

III Integration testing **Mocha**, **Chai** ja **Supertest** -testauskehikoilla käyttäen **Express**-sovellusta. Sovellus konvertoi HEX-värikoodeja RGB-muotoon.

---

## 📁 Tiedostojen rakenne

### `src/rgbConverter.js` - Konvertterifunktiot

Sisältää HEX → RGB -konvertointifunktion:

```javascript
function hexToRGB(hex) {
    let hexString = hex.startsWith("#") ? hex.slice(1) : hex;

    if (hexString.length !== 6) {
        throw new Error("Invalid HEX value(s)");
    }

    const r = parseInt(hexString.slice(0, 2), 16);
    const g = parseInt(hexString.slice(2, 4), 16);
    const b = parseInt(hexString.slice(4, 6), 16);

    if (isNaN(r) || isNaN(g) || isNaN(b)) {
        throw new Error("Invalid HEX value(s)");
    }

    return { red: r, green: g, blue: b };
}

module.exports = { hexToRGB };
```

### `src/server.js` - Express-sovellus

Pääsovellus, joka määrittää API-reititykset:

```javascript
const express = require('express');
const converter = require('./rgbConverter');
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello HEX converters"));

app.get("/hexToRGB", (req, res) => {
    const hex = req.query.hex;
    try {
        const rgb = converter.hexToRGB(hex);
        res.json(rgb);
    } catch(err) {
        res.status(400).json({ error: "Invalid HEX value" });
    }
});

if (process.env.NODE_ENV !== "test") {
    app.listen(port, () => console.log(`Server: localhost:${port}`));
}

module.exports = app;
```

### `__test__/hexToRGB.unit.test.js` - Unit-testit

Testaa hexToRGB-funktiota suoraan:

```javascript
const { expect } = require("chai");
const { hexToRGB } = require("../src/rgbConverter");

describe("hexToRGB function", () => {
  it("should convert valid hex (#FF00AA) to RGB", () => {
    expect(hexToRGB("#FF00AA")).to.deep.equal({ red: 255, green: 0, blue: 170 });
  });

  it("should throw error for invalid hex", () => {
    expect(() => hexToRGB("#GG0000")).to.throw("Invalid HEX value(s)");
  });
});
```

### `__test__/hexToRGB.integration.test.js` - Integration-testit

Testaa Express API:n reittejä Supertestin avulla:

```javascript
const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/server");

describe("GET /hexToRGB", () => {
  it("should return RGB object for valid hex", async () => {
    const res = await request(app)
      .get("/hexToRGB")
      .query({ hex: "#FF00AA" })
      .expect(200);
    expect(res.body).to.deep.equal({ red: 255, green: 0, blue: 170 });
  });

  it("should return 400 for invalid hex", async () => {
    const res = await request(app)
      .get("/hexToRGB")
      .query({ hex: "#GG0000" })
      .expect(400);
    expect(res.body).to.have.property("error", "Invalid HEX value");
  });
});
```

---

## 🚀 Käyttöohjeet

### 1. Riippuvuuksien asentaminen
```bash
npm install
```

### 2. Palvelimen käynnistäminen
```bash
npm start
```

Palvelin käynnistyy osoitteeseen `localhost:3000`.

### 3. Testien ajaminen
```bash
npm test
```

### 4. Esimerkkipyynnöt

HEX-koodi # -merkillä:
```
http://localhost:3000/hexToRGB?hex=%23FF5733
```

HEX-koodi ilman # -merkkiä:
```
http://localhost:3000/hexToRGB?hex=00FF00
```

---

## 📤 API-vastaukset

### Validi pyyntö
```json
{
  "red": 255,
  "green": 87,
  "blue": 51
}
```

### Virheellinen pyyntö
```json
{
  "error": "Invalid HEX value"
}
```