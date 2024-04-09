export const calcColumns = (width: number): number => {
  switch (true) {
    case width >= 836 && width < 1210:
      return 1;
    case width < 836:
      return 2;
    case width >= 1210 && width < 1429:
      return 2;
    case width >= 1429 && width < 1435:
      return 3;
    default:
      return 4;
  }
};
