export const getFlag = (iso?: string) => {
  if (!iso) return undefined;

  if (iso.length === 2)
    return iso
      .toUpperCase()
      .replace(/./g, (x) => String.fromCodePoint(x.charCodeAt(0) + 127397));

  return undefined;
};
