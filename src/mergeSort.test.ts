// mergeSort.test.js

import { merge } from "./mergeSort.ts";

test("Case 1:", () => {
  const nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;

  expect(merge(nums1, m, nums2, n)).toStrictEqual([1, 2, 2, 3, 5, 6]);
});

test("Case 2:", () => {
  const nums1 = [1];
  const m = 1;
  const nums2 = [];
  const n = 0;

  expect(merge(nums1, m, nums2, n)).toStrictEqual([1]);
});

test("Case 3:", () => {
  const nums1 = [0];
  const m = 0;
  const nums2 = [1];
  const n = 1;

  expect(merge(nums1, m, nums2, n)).toStrictEqual([1]);
});
