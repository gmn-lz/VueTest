function bigNumberAdd(num1, num2) {
    let result = '';
    let carry = 0;
    let len1 = num1.length;
    let len2 = num2.length;
    let maxLen = Math.max(len1, len2);
  
    for (let i = 0; i < maxLen; i++) {
      let n1 = parseInt(num1[len1 - 1 - i] || '0', 10);
      let n2 = parseInt(num2[len2 - 1 - i] || '0', 10);
      let sum = n1 + n2 + carry;
      carry = Math.floor(sum / 10);
      result = (sum % 10) + result;
    }
  
    if (carry > 0) {
      result = carry + result;
    }
  
    return result;
  }
  
  // 示例
  console.log(bigNumberAdd('12345678901234567890', '98765432109876543210')); // 输出：111111111011111111100
  