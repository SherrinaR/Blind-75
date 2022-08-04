/**
 * @param {number[]} nums
 * @return {boolean}
 */

/* Approach:
    * create a hash set to house elements
    * loop through nums array, i=0
        * if hash set has the nums element, return true
        * else return false and add element to hash set
*/

/*---METHOD 1---*/
var containsDuplicate = function (nums) {
    let hashSet = new Set()

    for (const i of nums) {
        if (hashSet.has(i)) {
            return true
        }
        hashSet.add(i)
    }
    return false
};

/* Time Complexity: 
    * O(n) - only loop through array of n elements once
    * Runtime: 103 ms
*/
/* Space Complexity: 
    * O(n) - require space in hashSet for each nth element added
    * Memory Usage: 50.7 MB
*/

/*---METHOD 2 (faster)---*/
var containsDuplicate = function (nums) {
    // pass the array into the hash set - duplicates will be removed
    // compare size of the new hash set to the original nums array length
    // return true if not equal
    return new Set(nums).size !== nums.length;
};

/* Time Complexity: 
    * O(n) - only loop through array of n elements once
    * Runtime: 85 ms
*/
/* Space Complexity: 
    * O(n) - require space in hashSet for each nth element added
    * Memory Usage: 50.7 MB
*/