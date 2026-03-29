# VIII_Deployment

[![Coverage Status](https://coveralls.io/repos/github/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/badge.svg?branch=main)](https://coveralls.io/github/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/?branch=main)

## 📋 Projektin kuvaus

Tässä projektissa toteutettiin yksikkötestaus **Mocha** ja **Chai** -kirjastoilla Node.js -projektissa. Testattavana oli `mylib.js`-tiedosto joka sisälsi funktioita eri käyttötarkoituksiin - tekstinmuokkaamisesta laskutoimituksiin.

Projektin tavoitteena oli:

1. Kirjoittaa yksikkötestit kaikille funktioille.  
2. Saada vähintään 60 % testikattavuus.  
3. Toteuttaa GitHub Actions workflow, joka ajaa testit automaattisesti.  
4. Lähettää kattavuusraportti Coverallsiin ja lisätä badge GitHub-repositoryyn.  

---

## 📁 Tiedostojen rakenne
```
VIII_Deployment/
├─ __test__/
│  ├─ test1.js
│  ├─ test2.js
│  └─ test3.js
│  └─ testN.js
├─ coverage/
├─ node_modules/
├─ src/
│  ├─ module1.js
│  ├─ module2.js
│  ├─ module3.js
│  └─ ...
│  └─ .internal/      * Ei vaikuta koodin testauksen kattavuuteen
├─ .gitignore
├─ LICENSE
├─ package-lock.json
├─ package.json
└─ README.md
```

## 🚀 Käyttöohjeet

### 1. Riippuvuuksien asentaminen

```bash
npm install
```
Node v22.18.0
npm 10.9.3
c8 11.0.0
chai 6.2.2
mocha 11.7.5

### 2. Testien suorittaminen

```bash
npm test
```

### 3. Koodin kattavuuden ajo

```bash
npm run coverage
```

     
