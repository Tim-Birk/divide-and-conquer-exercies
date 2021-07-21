// sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2); // 4
// sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3); // 1
// sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1); // 2
// sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4); // -1

function sortedFrequency(arr, val) {
  if (arr.length === 0 || arr === undefined) {
    return -1;
  }

  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let valCount = 0;

  while (leftIdx <= rightIdx) {
    let mIdx = Math.floor((leftIdx + rightIdx) / 2);
    let mVal = arr[mIdx];

    if (mVal < val) {
      leftIdx = mIdx + 1;
    } else if (mVal > val) {
      rightIdx = mIdx - 1;
    } else {
      // value is found
      // Find first index where number occurs
      let startIdx;
      if (arr[mIdx - 1] !== val) {
        // This is the start of the chain for that value
        valCount++;
        startIdx = mIdx + 1;
      } else if (arr[mIdx - 1] === val && mIdx - 1 === 0) {
        // The value being checked starts at first index in array
        startIdx = 0;
      } else {
        // Go backwards from current index to get first index where value exists
        if (mIdx !== 0) {
          for (let i = mIdx - 1; i >= 0; i--) {
            if (arr[i] !== val) {
              startIdx = i + 1;
              break;
            }
          }
        }
      }
      // Loop through array using startIdx to get count of chain
      if (startIdx !== arr.length - 1) {
        for (let i = startIdx; i < arr.length; i++) {
          if (arr[i] === val) {
            valCount++;
          } else {
            // this is the end of the chain for the value being counted
            break;
          }
        }
      }
      break;
    }
  }
  return valCount === 0 ? -1 : valCount;
}

module.exports = sortedFrequency;
