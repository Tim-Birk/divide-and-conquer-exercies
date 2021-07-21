function countZeroes(arr) {
  if (arr.length === 0 || arr === undefined) {
    return 0;
  }

  if (arr[0] === 0) {
    // if array starts with zero, entire array is zeros
    return arr.length;
  } else {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
      let mIdx = Math.floor((leftIdx + rightIdx) / 2);
      let mVal = arr[mIdx];
      if (mVal === 1) {
        leftIdx = mIdx + 1;
      } else if (mVal === 0) {
        if (arr[mIdx - 1] === 1) {
          // this is where change happens
          return arr.length - mIdx;
        } else {
          rightIdx = mIdx;
          leftIdx = 1;
        }
      }
    }
    return 0;
  }
}

module.exports = countZeroes;
