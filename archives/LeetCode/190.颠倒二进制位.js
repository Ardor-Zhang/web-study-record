/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// https://leetcode-cn.com/problems/reverse-bits/solution/zhi-qi-ran-zhi-qi-suo-yi-ran-wei-yun-suan-jie-fa-x/
// 分治的思想
function reverseBits(n) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res = (res << 1) + (n & 1);
    n >>= 1;
  }
  return res >>> 0;
}
// Accepted
// 600/600 cases passed (76 ms)
// Your runtime beats 99.18 % of javascript submissions
// Your memory usage beats 45.06 % of javascript submissions (39.4 MB)
// @lc code=end

function reverseBits_1(n) {
  let ret = 0; let power = 31;
  while (n) {
    ret += (n & 1) << power;
    n = n >> 1;
    power--;
  }
  return ret;
}

// --------------------------------------------------------------------------------------------------------------------
// https://leetcode-cn.com/problems/reverse-bits/solution/zhi-qi-ran-zhi-qi-suo-yi-ran-wei-yun-suan-jie-fa-x/
// 取模求和
// 与反装十进制整数使用取模除十累加的方法类似
// - 十进制： ans = ans * 10 + n % 10 ; n /= 10;
// - 二进制： ans = ans * 2 + n % 2; n /= 2;
function reverseBits_2(n) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res = (res << 1) + (n & 1);
    n >>= 1;
  }
  return res;
}

// --------------------------------------------------------------------------------------------------------------------
// 分治的思想
function reverseBits_3(n) {
  n = (n >>> 16) | (n << 16);
  n = ((n & 0xFF00FF00) >>> 8) | ((n & 0x00FF00FF) << 8);
  n = ((n & 0xF0F0F0F0) >>> 4) | ((n & 0x0F0F0F0F) << 4);
  n = ((n & 0xCCCCCCCC) >>> 2) | ((n & 0x33333333) << 2);
  n = ((n & 0xAAAAAAAA) >>> 1) | ((n & 0x55555555) << 1);
  return n >>> 0;
}
