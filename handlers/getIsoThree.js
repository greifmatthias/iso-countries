const data = require('../data');

const getIsoThree = (iso) => {

    const country = data[iso.toUpperCase()];

    return country ? country.isoThree : undefined;
};

module.exports = getIsoThree;