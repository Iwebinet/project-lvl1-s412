export const getRandom = max => Math.floor(Math.random() * (max - 1 + 1)) + 1;

export const isEven = question => question % 2 === 0;

export const getGreatestDenominator = (a, b) => {
  if (a < b) return getGreatestDenominator(b, a);
  if (b === 0) return a;
  return getGreatestDenominator(b, a % b);
};
