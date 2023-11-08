/************************************************************************************************************************************************************************************* 

THE PROBLEM: You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements 
in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this,  nums1 has a length of m + n, 
where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n. 


MY THOGHTS: It was easy for me to return num1 as a merged sorted array but my algorithm took more space and runtime then what was desired. The desired run time was a linear O(m+n)
while also not using temp variables and returning the result in the first array. I wasnt able to get this optimized solution until recieving a hint to start from the back of array1 
and work backwards 

************************************************************************************************************************************************************************************* */

/************************************************************************************************************************************************************************************* 

for my first solution I used the power of Javascript and this was accepted but it wasn't optimized.

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }
  nums1.sort();
};

************************************************************************************************************************************************************************************ */

// I then struggled for a couple hours until I recieved a hint to start backwards and was then able to create an optimized low level solution without the power of javascript
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] {
  let end1 = m - 1;
  let end2 = n - 1;
  let endTotal = nums1.length - 1;
  while (endTotal >= 0) {
    if (nums1[end1] > nums2[end2]) {
      nums1[endTotal] = nums1[end1];
      end1--;
    } else if (nums2[end2] >= nums1[end1]) {
      nums1[endTotal] = nums2[end2];
      end2--;
    } else if (
      typeof nums1[end1] === "undefined" &&
      typeof nums2[end2] === "number"
    ) {
      // cornercase where nums1 has been traversed but nums2 still has numbers that need to be added
      nums1[endTotal] = nums2[end2];
    }
    endTotal--;
  }
  return nums1;
}

/************************************************************************************************************************************************************************************* */
