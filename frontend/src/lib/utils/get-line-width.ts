export const getLineWidth = (value: number) => {
  switch (value) {
    case 2:
      return "0px";
    case 3:
      return "50%";
    case 4:
      return "100%";
    default:
      return "0px";
  }
};
