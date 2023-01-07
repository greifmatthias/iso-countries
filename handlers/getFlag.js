const getFlag = (iso) => {
  return iso.length === 2
    ? iso
        .toUpperCase()
        .replace(/./g, (x) => String.fromCodePoint(x.charCodeAt(0) + 127397))
    : iso;
};

module.exports = getFlag;
