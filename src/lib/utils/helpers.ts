export const numberWithSpaces = (n: number) => {
  const formatter = new Intl.NumberFormat('sv-SE');
  return formatter.format(n);
};
