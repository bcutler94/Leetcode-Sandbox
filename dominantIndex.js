/*
In a given integer array nums, there is always exactly one largest element.

Find whether the largest element in the array is at least twice as much as 
every other number in the array.

If it is, return the index of the largest element, otherwise return -1.
*/

// one iteration
var dominantIndex = function (nums) {
    let max = nums[0];
    let maxIdx = 0;
    let secondMax = -Infinity;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            secondMax = max;
            max = nums[i];
            maxIdx = i;
        } else if (nums[i] > secondMax) {
            secondMax = nums[i];
        }
    }
    return max >= secondMax * 2 ? maxIdx : -1;
};

// two iterations
var dominantIndex = function (nums) {
    let max = nums[0];
    let maxIdx = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxIdx = i;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (i !== maxIdx && nums[i] * 2 > max) return -1;
    }
    return maxIdx;
};