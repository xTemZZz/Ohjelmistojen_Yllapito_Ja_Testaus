# VIII_Deployment

[![Coverage Status](https://coveralls.io/repos/github/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/badge.svg?branch=main)](https://coveralls.io/github/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/?branch=main)

## Projektin kuvaus

Tässä projektissa toteutettiin yksikkötestaus **Mocha** ja **Chai** -kirjastoilla Node.js -projektissa. Testattavana oli `AT00BY10`-kirjasto joka sisälsi funktioita eri käyttötarkoituksiin - tekstinmuokkaamisesta laskutoimituksiin. ( [Alkuperäinen kirjasto](https://github.com/petri-rantanen/AT00BY10))

Projektin tavoitteena oli:

1. Kirjoittaa yksikkötestit kirjastolle.  
2. Saada vähintään 60 % testikattavuus (ei pidä sisällään .internal -kansiota).  
3. Toteuttaa GitHub Actions workflow, joka ajaa testit automaattisesti.  
4. Integroida kattavuusraportointi Coverallsiin.
5. Dokumentoida toteutus ja raportoida mahdolliset virheet  

---
## Lähestymistapa ja toteutus

# Testauksen suunnittelu
Testaus aloitettiin tarkastelemalla annettua kirjastoa. 

## Tiedostojen rakenne
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


## GitHub Actions
---
<img width="890" height="815" alt="image" src="https://github.com/user-attachments/assets/324e8940-c88f-4917-8f65-5033f396aae0" />

CI putki on toteutettu projektissa github actionsilla. 

workflow_dispatch - testausta varten lisätty, voi ajaa actionsin ilman push / pull
Actions aktivoituu ainoastaan VIII_deployment kohdistuviin pull ja push requesteihin
Valittiin ubuntu 24.04 koska se on uusin LTS
node versioksi otettiin uusin 24.x versio
actions/checkout uusin v5

askeleet: 
- Asennetaan riippuvuudet, erikseen määritelty, että tapahtuu VIII_Deployment kansiossa komennolla npm install
- Käydään testit ja coverage läpi komennolla npm run coverage
- Lähetetään kattavuusraportti Coverallsille


---
## Testaus 
| FUNKTIO | TESTI | STATUS        |  KRIITTINEN       |
|----------|--------------|--------------|-----------------|
| [add.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/add.js) | [add.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/add.test.js) | ❌ Critical | 🔥 Fix immediately |
| [at.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/at.js) | [at.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/at.test.js) | ❌ Critical | 🔥 Fix immediately |
| [camelCase.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/camelCase.js) | [camelCase.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/camelCase.test.js) | ❌ Critical | 🔥 Fix immediately |
| [capitalize.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/capitalize.js) | | ❌ Critical | 🔥 Fix immediately |
| [castArray.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/castArray.js) | | ❌ Critical | 🔥 Fix immediately |
| [ceil.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/ceil.js) | | ❌ Critical | 🔥 Fix immediately |
| [chunk.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/chunk.js) | | ❌ Critical | 🔥 Fix immediately |
| [clamp.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/clamp.js) | | ❌ Critical | 🔥 Fix immediately |
| [compact.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/compact.js) | | ❌ Critical | 🔥 Fix immediately |
| [countBy.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/countBy.js) | | ❌ Critical | 🔥 Fix immediately |
| [defaultTo.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/defaultTo.js) | | ❌ Critical | 🔥 Fix immediately |
| [defaultToAny.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/defaultToAny.js) | | ❌ Critical | 🔥 Fix immediately |
| [difference.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/difference.js) | | ❌ Critical | 🔥 Fix immediately |
| [divide.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/divide.js) | | ❌ Critical | 🔥 Fix immediately |
| [drop.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/drop.js) | | ❌ Critical | 🔥 Fix immediately |
| [endsWith.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/endsWith.js) | | ❌ Critical | 🔥 Fix immediately |
| [eq.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/eq.js) | | ❌ Critical | 🔥 Fix immediately |
| [every.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/every.js) | | ❌ Critical | 🔥 Fix immediately |
| [filter.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/filter.js) | | ❌ Critical | 🔥 Fix immediately |
| [get.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/get.js) | | ❌ Critical | 🔥 Fix immediately |
| [isArguments.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isArguments.js) | | ❌ Critical | 🔥 Fix immediately |
| [isArrayLike.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isArrayLike.js) | | ❌ Critical | 🔥 Fix immediately |
| [isArrayLikeObject.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isArrayLikeObject.js) | | ❌ Critical | 🔥 Fix immediately |
| [isBoolean.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isBoolean.js) | | ❌ Critical | 🔥 Fix immediately |
| [isBuffer.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isBuffer.js) | | ❌ Critical | 🔥 Fix immediately |
| [isDate.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isDate.js) | | ❌ Critical | 🔥 Fix immediately |
| [isEmpty.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isEmpty.js) | | ❌ Critical | 🔥 Fix immediately |
| [isLength.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isLength.js) | | ❌ Critical | 🔥 Fix immediately |
| [isObject.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isObject.js) | | ❌ Critical | 🔥 Fix immediately |
| [isObjectLike.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isObjectLike.js) | | ❌ Critical | 🔥 Fix immediately |
| [isSymbol.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isSymbol.js) | | ❌ Critical | 🔥 Fix immediately |
| [isTypedArray.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isTypedArray.js) | | ❌ Critical | 🔥 Fix immediately |
| [keys.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/keys.js) | | ❌ Critical | 🔥 Fix immediately |
| [map.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/map.js) | | ❌ Critical | 🔥 Fix immediately |
| [memoize.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/memoize.js) | | ❌ Critical | 🔥 Fix immediately |
| [reduce.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/reduce.js) | | ❌ Critical | 🔥 Fix immediately |
| [slice.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/slice.js) | | ❌ Critical | 🔥 Fix immediately |
| [toFinite.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/toFinite.js) | | ❌ Critical | 🔥 Fix immediately |
| [toInteger.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/toInteger.js) | | ❌ Critical | 🔥 Fix immediately |
| [toNumber.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/toNumber.js) | | ❌ Critical | 🔥 Fix immediately |
| [toString.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/toString.js) | | ❌ Critical | 🔥 Fix immediately |
| [upperFirst.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/upperFirst.js) | | ❌ Critical | 🔥 Fix immediately |
| [words.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/words.js) | | ❌ Critical | 🔥 Fix immediately |


##  Käyttöohjeet

### 1. Riippuvuuksien asentaminen

```bash
npm install
```
- Node v22.18.0
- npm 10.9.3
- c8 11.0.0
- Chai 6.2.2
- Mocha 11.7.5

### 2.1 Testien suorittaminen ilman coveragea

```bash
npm test
```

### 2.2 Testien suorittaminen kattavuuden kanssa

```bash
npm run coverage
```

---
