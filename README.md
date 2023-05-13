[![wakatime](https://wakatime.com/badge/user/8fd64d05-2a0b-433e-b862-88c53af4efd4/project/c84ba303-364d-4681-8baa-beceaffe76f7.svg)](https://wakatime.com/badge/user/8fd64d05-2a0b-433e-b862-88c53af4efd4/project/c84ba303-364d-4681-8baa-beceaffe76f7)

# ISO-COUNTRY-CONVERSION

**quick note: this project was made for own use, but it's my gift to the public so everyone can enjoy, feel free to give it another life.**
**If there are some countries missing, let me know or open a pull-request**


## INSTALLATION
Just run the ```npm i @greifmatthias/iso-countries``` in your Node project.


## FUNCTIONALITIES
All these functionalities are based on a ISO 3166-1 alpha-2 code.

### GET LIST OF ALL SUPPORTED COUNTRIES
This function returns a list of alle the supported countries

Example:
```javascript
import { getAll } from '@greifmatthias/iso-countries';

const countries = getAll();
```

### GET THE FLAG FOR A COUNTRY
This function returns a Unicode based Flag Emoji like follow: 🇧🇪 for Belgium.
If the emoji is displayed like 🇧 🇪, it means that your current environment doesn't support these Unicode emoji yet.

Example: ```Greetings from 🇧🇪```
```javascript
import { getFlag } from '@greifmatthias/iso-countries';

const flag = getFlag('BE');
console.log(`Greetings from ${flag}`); 
```


### GET THE NAME OF A COUNTRY
This function returns the name of the country in English.

Example: ```Greetings from Belgium```
```javascript
import { getName } from '@greifmatthias/iso-countries';

const name = getName('BE');
console.log(`Greetings from ${name}`); 
```


### GET THE 3-LETTER-ISO OF A COUNTRY
This function returns the 3-letter-version ISO for a country.

Example: ```Greetings from BEL```
```javascript
import { getIsoThree } from '@greifmatthias/iso-countries';

const iso = getIsoThree('BE');
console.log(`Greetings from ${iso}`); 
```