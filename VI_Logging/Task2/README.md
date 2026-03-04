# Tally Counter REST API – Task 2

📋 **Projektin kuvaus**  
Tämä projekti sisältää **Tally Counter REST API:n** Node.js:llä ja Expressillä. API tarjoaa endpointit, joilla voi kasvattaa, lukea ja nollata laskuria. 

---

## 📁 Tiedostojen rakenne

```
.
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── rest.http        # Tyhjä ja tarpeeton tiedosto
└── src
    ├── counter.js   
    ├── logger.js    
    ├── main.js      
    └── routes.js    
└── __test__
    ├── counter.test.js 
    └── server.test.js  
```

---

### `src/counter.js` – Counter logiikka

```js
const logger = require('./logger')
let count = 0;

function increase(){
    count++;
    logger.info(`[COUNTER] increase ${count}`)
    return count;
}

function read(){
    logger.info(`[COUNTER] read ${count}`)
    return count;
}

function reset(){
    logger.info(`[COUNTER] zeroed ${count}`)
    count = 0;
    return count;
}

module.exports = {increase, read, reset}
```

---

### `src/routes.js` – API endpointit

```js
const express = require('express')
const counter = require('./counter')
const logger = require('./logger')
const router = express.Router()

router.get('/counter-increase', (req, res) => {
    const value = counter.increase()
    logger.info(`[ENDPOINT] ${req.method} '${req.originalUrl}'`);
    res.json({counter: value})
})

router.get('/counter-read', (req, res) => {
    const value = counter.read()
    logger.info(`[ENDPOINT] ${req.method} '${req.originalUrl}'`);
    res.json({counter: value})
})

router.get('/counter-reset', (req, res) => {
    const value = counter.reset();
    logger.info(`[ENDPOINT] ${req.method} '${req.originalUrl}'`);
    res.json({counter: value})
})

router.get('/counter-error', (req, res, next) => {
  next(new Error('Test error'));
});

module.exports = router;
```

---

### `src/main.js` – Express sovellus

```js
const express = require('express')
const routes = require('./routes')
const logger = require('./logger')

const app = express()
app.use(express.json());
app.use('/', routes)

logger.info("[MAIN] Starting")

app.use((err, req, res, next) => {
  logger.error("[MAIN]" + err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = 3000
if (require.main === module) {
    app.listen(PORT, () => logger.info(`[MAIN] Counter app running on port ${PORT}`))
}

module.exports = app
```

---

### `src/logger.js` – Winston logger

```js
const { createLogger, transports, format } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' })
  ]
});

module.exports = logger;
```

---

### `__test__/counter.test.js` – Unit-testit counter.js:lle

Mocha + Chai testit counter-moduulille (increase, read, reset)

---

### `__test__/server.test.js` – Integration-testit routes/main.js:lle

Mocha + Chai + Supertest testit Express API -reiteille

---

## 🚀 Käyttöohjeet

### 1. Riippuvuuksien asentaminen

```bash
npm install
```

- Express 4.18.2
- Winston 3.11.0
- Mocha, Chai, Supertest (testaukseen)

### 2. Palvelimen käynnistäminen

```bash
npm start
```

- Palvelin kuuntelee porttia 3000.

### 3. Testien ajaminen

```bash
npm test
```

### 4. Esimerkkipyynnöt (`rest.http` tai Postman)

- Kasvata counteria: `GET http://localhost:3000/counter-increase`
- Lue counter: `GET http://localhost:3000/counter-read`
- Nollaa counter: `GET http://localhost:3000/counter-reset`
- Testaa virheloggausta: `GET http://localhost:3000/counter-error`

### 5. API-vastaukset

**Validi pyyntö:**
```json
{ "counter": 1 }
```

**Virhe:**
```json
{ "error": "Test error" }
```

