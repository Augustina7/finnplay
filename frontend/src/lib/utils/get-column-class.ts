export const getColumnClass = (columns: number): string => {
  return columns === 2
    ? "twoColumns"
    : columns === 3
    ? "threeColumns"
    : columns === 4
    ? "fourColumns"
    : "twoColumns";
};
