# Logger Project – Task 1

📋 **Projektin kuvaus**  
Tämä projekti demonstroi **Winston-pohjaisen loggerin** käyttöä Node.js-sovelluksessa. Logger kirjoittaa tapahtumat konsoliin sekä tiedostoihin (`logs/combined.log` ja `logs/error.log`) eri logitasoille (`info`, `warn`, `error`). 

---

## 📁 Tiedostojen rakenne

```
.
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── src
    ├── logger.js     
    └── main.js        
└── __test__
    └── logger.test.js # Luovutettu testien osalta
```

---

### `src/logger.js` – Logger-konfiguraatio

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

### `src/main.js` – Esimerkkilokit

```js
const logger = require('./logger');

logger.log('info', 'This is an informational message.');
logger.log('warn', 'This is a warning message.');
logger.log('error', 'This is an error message.');

logger.info('This is another informational message.');
logger.warn('This is another warning message.');
logger.error('This is another error message.');
```

---

### `__test__/logger.test.js` – Testit Mocha & Chai

Yritin luoda testejä filesystemiinm ei onnistunut ja aika loppui kesken. :(

---

## 🚀 Käyttöohjeet

### 1. Riippuvuuksien asentaminen

```bash
npm install
```

- Winston asennetaan projektiin version 3.11.0  

---

### 2. Sovelluksen ajaminen

```bash
node src/main.js
```

- Consoleen tulee esimerkkilokit
- Tiedostoihin `logs/combined.log` ja `logs/error.log` kirjoitetaan vastaavat viestit

---



### 3. Esimerkkilokit

**Console:**

```
info: This is an informational message.
warn: This is a warning message.
error: This is an error message.
```

**logs/combined.log:**

```json
{"level":"info","message":"This is an informational message.","timestamp":"..."}
{"level":"warn","message":"This is a warning message.","timestamp":"..."}
{"level":"error","message":"This is an error message.","timestamp":"..."}
```

**logs/error.log:**

```json
{"level":"error","message":"This is an error message.","timestamp":"..."}
```

