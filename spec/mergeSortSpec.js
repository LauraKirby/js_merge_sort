var mergeSort = require("../mergeSort.js");

describe('Merge', function() {
  it('should merge two arrays of size 1', function() {
     expect(mergeSort.merge([1],[2])).toEqual([1,2]);
  });

});

describe('Merge Sort', function() {
  it('should sort an array', function() {
     expect(mergeSort.mergeSort([2,1])).toEqual([1,2]);
  });
});

