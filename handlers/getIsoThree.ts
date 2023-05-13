import { countryData } from "../data";

export const getIsoThree = (iso?: string) => {
  if (!iso) return undefined;

  const country = countryData[iso.toUpperCase()];

  return country?.isoThree;
};
