export const getVisibleCardCount = (width: number): number => {
  if (width >= 1280) {
    return 9;
  } else if (width >= 1024) {
    return 7;
  } else if (width >= 768) {
    return 5;
  } else if (width >= 640) {
    return 3;
  } else {
    return 2;
  }
};
