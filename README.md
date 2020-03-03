# ISO-COUNTRY-CONVERSION

**quick note: this project was made for own use, but it's my gift to the public so everyone can enjoy, feel free to give it another life.**
**If there are some countries missing, let me know or open a pull-request**


## INSTALLATION
Just run the ```npm i iso-country-conversion ``` in your Node project.


## FUNCTIONALITIES
All these functionalities are based on a ISO 3166-1 alpha-2 code.


### GET THE FLAG FOR A COUNTRY
This function returns a Unicode based Flag Emoji like follow: 🇧🇪 for Belgium.
If the emoji is displayed like 🇧 🇪, it means that your current environment doesn't support these Unicode emoji yet.

Example: ```Greetings from 🇧🇪```
```javascript
const countryHandler = require('iso-country-conversion');

const flag = countryHandler.getFlag('BE');
console.log(`Greetings from ${flag}`); 
```


### GET THE NAME OF A COUNTRY
This function returns the name of the country in English.

Example: ```Greetings from Belgium```
```javascript
const countryHandler = require('iso-country-conversion');

const flag = countryHandler.getName('BE');
console.log(`Greetings from ${flag}`); 
```


### GET THE 3-LETTER-ISO OF A COUNTRY
This function returns the 3-letter-version ISO for a country.

Example: ```Greetings from BEL```
```javascript
const countryHandler = require('iso-country-conversion');

const flag = countryHandler.getIsoThree('BE');
console.log(`Greetings from ${flag}`); 
```