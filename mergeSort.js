
// Merge takes two sorted arrays (left, right) and
// returns one array which contains the sorted numbers
// from left and right.

	exports.merge = function(left, right) {
		var leftI = 0;
		var rightI = 0;
		var result = [];
		while(leftI < left.length || rightI < right.length) {
			if (leftI===left.length) {
				result.push(right[rightI]);
				rightI++; 
			}
			else if (rightI===right.length) {
				result.push(left[leftI]);
				leftI++; 
			}
			else if(left[leftI] <= right[rightI]){
				result.push(left[leftI]);
				leftI++;
			} 
			else {
				result.push(right[rightI]);
				rightI++;
			} 
		}
		return result;
 	}; 

// Merge sort uses the merge function in order to
// sort an array. Given an array of numbers in any
// order, merge sort should return an array that is
// sorted.
exports.mergeSort = function(arr) {
	if (arr.length<2){
		return arr; 
	}
	var half = Math.floor(arr.length/2); 
	var left = arr.slice(0, half); 
	var right = arr.slice(half, arr.length);
	return exports.merge(exports.mergeSort(left), exports.mergeSort(right)); 
};
