import { countryData } from "../data";

export const getName = (iso?: string) => {
  if (!iso) return undefined;

  const country = countryData[iso.toUpperCase()];

  return country?.name;
};
