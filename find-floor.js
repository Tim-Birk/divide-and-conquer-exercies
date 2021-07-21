// findFloor([1, 2, 8, 10, 10, 12, 19], 5) // 2
// findFloor([1, 2, 8, 10, 10, 12, 19], 20) // 19
// findFloor([1, 2, 8, 10, 10, 12, 19], 0) // -1

function findFloor(arr, x) {
  if (!arr || arr.length === 0) {
    return -1;
  }

  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let mIdx = Math.floor((leftIdx + rightIdx) / 2);
    let mVal = arr[mIdx];

    if (mIdx === arr.length - 1) {
      if (mVal < x) {
        return mVal;
      }
    } else if (mVal < x && arr[mIdx + 1] > x) {
      return mVal;
    }

    if (mVal >= x) {
      rightIdx = mIdx - 1;
    } else if (mVal < x) {
      leftIdx = mIdx + 1;
    }
  }

  return -1;
}

module.exports = findFloor;
