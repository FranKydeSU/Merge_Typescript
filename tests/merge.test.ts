import { merge } from '../merge';

const collection1 = [1, 3, 5, 6, 7, 8, 9, 10];
const collection2 = [6, 4, 2, 1, 0];
const collection3 = [7, 8, 9, 50, 24];

test('merge test should be pass', () => {
  console.log(merge(collection1, collection2, collection3))
  expect(merge(collection1, collection2, collection3)).toStrictEqual([0, 1, 1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 24, 50]);
});

test('merge test should be fail', () => {
  console.log(merge(collection1, collection2, collection3))
  expect(merge(collection1, collection2, collection3)).toStrictEqual([0, 1, 1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 9, 10, 24, 50]);
});