// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) //0

function findRotationCount(arr) {
  if (arr === undefined || arr.length === 0) {
    return 0;
  }

  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let mIdx = Math.floor((leftIdx + rightIdx) / 2);
    let mVal = arr[mIdx];

    if (mIdx === arr.length - 1) {
      if (mVal < arr[mIdx - 1]) {
        return mIdx;
      }
    }

    if (mVal < arr[mIdx - 1] && mVal < arr[mIdx + 1]) {
      return mIdx;
    } else if (mVal < arr[mIdx - 1] && mVal < arr[mIdx + 1]) {
      rightIdx = mIdx - 1;
    } else {
      leftIdx = mIdx + 1;
    }
  }

  return 0;
}

module.exports = findRotationCount;
