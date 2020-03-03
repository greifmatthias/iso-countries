const data = require('../data');

const getName = (iso) => {

    const country = data[iso.toUpperCase()];

    return country ? country.name : undefined;
};

module.exports = getName;