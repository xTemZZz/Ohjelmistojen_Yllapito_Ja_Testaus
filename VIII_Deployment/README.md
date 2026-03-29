# Unit Testing Projekti

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
│  └─ moduleN.js
│  └─ .internal/
│      ├─ helper1.js
│      └─ helper2.js
│      └─ helperN.js
├─ .gitignore
├─ LICENSE
├─ package-lock.json
├─ package.json
└─ README.md
