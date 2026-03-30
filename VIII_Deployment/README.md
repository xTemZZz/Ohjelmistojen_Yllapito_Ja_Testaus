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
Listassa alla on testatutut funktiot, niiden testit, oliko kirjasto ehjä ladatessa, jos ei mikä bugi niissä oli

| FUNKTIO | TESTI | TOIMIVUUS | ISSUE REPORT |   KORJATTU | 
|----------|--------------|--------------|-----------------|-----------------|
| [add.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/add.js) | [add.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/add.test.js) | ✔️ | 
| [at.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/at.js) | [at.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/at.test.js) | ✔️ | 
| [camelCase.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/camelCase.js) | [camelCase.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/camelCase.test.js) | ❌ | [issueCamelCase](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/issues/IssueCamelCase.md) | ✔️ |
| [capitalize.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/capitalize.js) | [capitalize.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/capitalize.test.js) | ✔️  | 
| [castArray.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/castArray.js) | [castArray.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/castArray.test.js) | ❌ | [issueCastArray](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/issues/IssueCastArray.md) | ✔️ |
| [ceil.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/ceil.js) | [ceil.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/ceil.test.js) | ✔️ | 
| [chunk.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/chunk.js) | [chunk.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/chunk.test.js) | ❌ | [issueChunk](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/issues/IssueChunk.md) | ✔️ |
| [clamp.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/clamp.js) | [clamp.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/clamp.test.js) | ✔️ | 
| [compact.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/compact.js) | [compact.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/compact.test.js) | ❌ | [issueCompact](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/issues/IssueCompact.md) | ✔️ |
| [countBy.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/countBy.js) | [countBy.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/countBy.test.js) | ❌ | [issueCountBy](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/issues/IssueCountBy.md) | ✔️ |
| [defaultTo.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/defaultTo.js) | [defaultTo.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/defaultTo.test.js) | ❌ | [issueDefaultTo](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/issues/IssueDefaultTo.md) | ✔️ |
| [defaultToAny.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/defaultToAny.js) | [defaultToAny.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/defaultToAny.test.js) | ❌ | [issueDefaultToAny](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/issues/IssueDefaultToAny.md) | ❌ |
| [difference.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/difference.js) | [difference.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/difference.test.js) | ✔️ | 
| [divide.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/divide.js) | [divide.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/divide.test.js) | ❌ | [issueDivide](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/issues/IssueDivide.md) | ✔️ |
| [drop.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/drop.js) | [drop.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/drop.test.js) | ✔️ | 
| [endsWith.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/endsWith.js) | [endsWith.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/endsWith.test.js) | ✔️ | 
| [eq.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/eq.js) | [eq.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/eq.test.js) | ✔️ | 
| [every.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/every.js) | [every.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/every.test.js) | ✔️ | 
| [filter.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/filter.js) | [filter.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/filter.test.js) | ✔️ | 
| [get.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/get.js) | [get.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/get.test.js) | ✔️ | 
| [isArguments.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isArguments.js) | [isArguments.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/isArguments.test.js) | ✔️ | 
| [isArrayLike.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isArrayLike.js) | [isArrayLike.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/isArrayLike.test.js) | ✔️ | 
| [isArrayLikeObject.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isArrayLikeObject.js) | [isArrayLikeObject.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/isArrayLikeObject.test.js) | ✔️ | 
| [isBoolean.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isBoolean.js) | [isBoolean.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/isBoolean.test.js) | ✔️ | 
| [isBuffer.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isBuffer.js) | [isBuffer.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/isBuffer.test.js) | ✔️ | 
| [isDate.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isDate.js) | [isDate.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/isDate.test.js) | ✔️ | 
| [isEmpty.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isEmpty.js) | [isEmpty.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/isEmpty.test.js) | ✔️ | 
| [isLength.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isLength.js) | [isLength.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/isLength.test.js) | ✔️ | 
| [isObject.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isObject.js) | [isObject.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/isObject.test.js) | ✔️ | 
| [isObjectLike.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isObjectLike.js) | [isObjectLike.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/isObjectLike.test.js) | ✔️ | 
| [isSymbol.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isSymbol.js) | [isSymbol.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/isSymbol.test.js) | ✔️ | 
| [isTypedArray.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/isTypedArray.js) | [isTypedArray.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/isTypedArray.test.js) | ✔️ | 
| [keys.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/keys.js) | [keys.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/keys.test.js) | ❌ | [issueKeys](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/issues/IssueKeys.md) | ❌ |
| [map.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/map.js) | [map.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/map.test.js) |✔️ | 
| [memoize.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/memoize.js) | [memoize.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/memoize.test.js) | ✔️ | 
| [reduce.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/reduce.js) | [reduce.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/reduce.test.js) | ✔️ | 
| [slice.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/slice.js) | [slice.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/slice.test.js) | ❌  | [issueSlice](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/issues/IssueSlice.md) | ✔️ |
| [toFinite.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/toFinite.js) | [toFinite.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/toFinite.test.js) | ✔️ | 
| [toInteger.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/toInteger.js) | [toInteger.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/toInteger.test.js) | ✔️ |
| [toNumber.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/toNumber.js) | [toNumber.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/toNumber.test.js) | ✔️ | 
| [toString.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/toString.js) | [toString.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/toString.test.js) | ✔️ | 
| [upperFirst.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/upperFirst.js) | [upperFirst.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/upperFirst.test.js) | ❌ | [issueToString](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/issues/IssueToString.md) | ✔️ |
| [words.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/src/words.js) | [words.test.js](https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/blob/main/VIII_Deployment/__test__/words.test.js) | ✔️ | 


##  Käyttöohjeet

### 1. Deployment kansion kloonaus 

```bash
git clone --depth 1 --filter=blob:none --sparse https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus.git && cd Ohjelmistojen_Yllapito_Ja_Testaus && git sparse-checkout set VIII_Deployment
```

Voit myös halutessasi kloonata koko repositorin
```bash
git clone https://github.com/xTemZZz/Ohjelmistojen_Yllapito_Ja_Testaus/tree/main
```

### 2. Riippuvuuksien asentaminen

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

### 2.3 Yksittäisten testien suorittaminen

```bash
npm run test:one __test__/funktionNimi.test.js
```

---
