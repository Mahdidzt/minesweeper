export const annotate = (input) => {
  const list = input.map(el => el.split('').map(item => item === ' ' ? +item : item));
  const validElement = (i, j) => {
    if (i < 0 || i > list.length - 1) {
      return false;
    }
    if (j < 0 || j > list[i].length - 1) {
      return false;
    }
    if (list[i][j] === '*') {
      return false;
    }

    return true;
  };
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      const current = list[i][j];
      if (current === '*') {
        validElement(i - 1, j - 1) && list[i - 1][j - 1]++;
        validElement(i - 1, j) && list[i - 1][j]++;
        validElement(i - 1, j + 1) && list[i - 1][j + 1]++;
        validElement(i, j - 1) && list[i][j - 1]++;
        validElement(i, j + 1,) && list[i][j + 1]++;
        validElement(i + 1, j - 1) && list[i + 1][j - 1]++;
        validElement(i + 1, j) && list[i + 1][j]++;
        validElement(i + 1, j + 1) && list[i + 1][j + 1]++;
      }
    }
  }
  return list.map(el => el.map(item => {
    if (item === 0) {
      return ' ';
    }
    return item;
  }).join(''));
};
