/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 状态转移方程
const rob = nums => {
  if(!nums || !nums.length ) return 0;
  const len = nums.length;
  if(len === 1) return nums[0];
  const dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i]);
  }
  return dp[len-1];
};
// @lc code=end

// 状态
const rob_1 = nums => {
  const len = nums.length;
  if(!len) return 0;
  if(len === 1) return nums[0];
  if(len === 2) return nums[0] > nums[1] ? nums[0] : nums[1];
  const dp = [];
  dp[0] = nums[0]; 
  dp[1] = nums[1]; 
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i-2], dp[i-3] ? dp[i-3] : 0) + nums[i];
  }
  return dp[len-1] > dp[len-2] ? dp[len-1] : dp[len-2];

};
