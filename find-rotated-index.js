// findRotatedIndex([3, 4, 1, 2], 4); //1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8); //2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3); //6
// findRotatedIndex([37, 44, 66, 102, 10, 22], 14); //-1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12); //-1

function findRotatedIndex(arr, val) {
  if (arr.length === 0 || arr === undefined) {
    return -1;
  }

  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let rotateIdx = null;

  while (leftIdx <= rightIdx) {
    let mIdx = Math.floor((leftIdx + rightIdx) / 2);
    let mVal = arr[mIdx];
    if (mVal === val) {
      return mIdx;
    } else if (val === arr[leftIdx]) {
      return leftIdx;
    } else if (val === arr[rightIdx]) {
      return rightIdx;
    }

    if (mVal < val) {
      if (val > arr[rightIdx]) {
        leftIdx = mIdx + 1;
      } else {
        rightIdx--;
      }
    } else if (mVal > val) {
      if (val > arr[leftIdx]) {
        rightIdx = mIdx - 1;
      } else {
        leftIdx++;
      }
    }
  }
  return -1;
}

module.exports = findRotatedIndex;
