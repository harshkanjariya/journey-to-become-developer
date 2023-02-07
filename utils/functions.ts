export function toBinaryString(num: number, bits = 8) {
  if (bits % 8 !== 0) throw new Error('bits value must be multiple of 8');
  if (num === 0) return '0'.repeat(bits);

  let binary = '';
  const isNegative = num < 0;
  num = num > 0 ? num : -1 - num;
  while (num > 0) {
    binary = binary + num % 2;
    num = Math.floor(num / 2);
  }
  let prefix = '';
  if (bits > binary.length + (isNegative ? 1 : 0)) {
    prefix = '0'.repeat(bits - binary.length - (isNegative ? 1 : 0));
  }
  binary = (isNegative ? '1' : '') + prefix + binary.split('').reverse().join('');
  return binary;
}

export function floatToBinaryString(num: string) {
  if (num === '0') return '0'.repeat(32);
  num = num.trim().toLowerCase();

  let exponentValue = 127;
  if (num.indexOf('e') > 0) {
    exponentValue += parseInt(num.substring(num.indexOf('e') + 1)) || 0;
  }

  let sign = num[0] === '-' ? '1' : '0';

  if (num.indexOf('.') > 0) {
    const n = parseInt(num.substring(0, num.indexOf('.'))) || 0;
    let bin = '';
    while (n > 0) {
      bin = bin + (num % 2);
    }
  }

  let mantissa = '';
  let exponent = '';

  if (num.indexOf('e') > 0) {
    exponent = toBinaryString(eVal + 127);
  } else {
    exponent = '01111111';
  }
  return sign + exponent + mantissa;
}

export function encodeFloat(number) {
  var n = +number,
      status = (n !== n) || n == -Infinity || n == +Infinity ? n : 0,
      exp = 0,
      len = 281, // 2 * 127 + 1 + 23 + 3,
      bin = new Array(len),
      signal = (n = status !== 0 ? 0 : n) < 0,
      n = Math.abs(n),
      intPart = Math.floor(n),
      floatPart = n - intPart,
      i, lastBit, rounded, j, exponent;

  if (status !== 0) {
    if (n !== n) {
      return 0x7fc00000;
    }
    if (n === Infinity) {
      return 0x7f800000;
    }
    if (n === -Infinity) {
      return 0xff800000
    }
  }

  i = len;
  while (i) {
    bin[--i] = 0;
  }

  i = 129;
  while (intPart && i) {
    bin[--i] = intPart % 2;
    intPart = Math.floor(intPart / 2);
  }

  i = 128;
  while (floatPart > 0 && i) {
    (bin[++i] = ((floatPart *= 2) >= 1) - 0) && --floatPart;
  }

  i = -1;
  while (++i < len && !bin[i]);

  if (bin[(lastBit = 22 + (i = (exp = 128 - i) >= -126 && exp <= 127 ? i + 1 : 128 - (exp = -127))) + 1]) {
    if (!(rounded = bin[lastBit])) {
      j = lastBit + 2;
      while (!rounded && j < len) {
        rounded = bin[j++];
      }
    }

    j = lastBit + 1;
    while (rounded && --j >= 0) {
      (bin[j] = !bin[j] - 0) && (rounded = 0);
    }
  }
  i = i - 2 < 0 ? -1 : i - 3;
  while(++i < len && !bin[i]);
  (exp = 128 - i) >= -126 && exp <= 127 ? ++i : exp < -126 && (i = 255, exp = -127);
  (intPart || status !== 0) && (exp = 128, i = 129, status == -Infinity ? signal = 1 : (status !== status) && (bin[i] = 1));

  n = Math.abs(exp + 127);
  exponent = 0;
  j = 0;
  while (j < 8) {
    exponent += (n % 2) << j;
    n >>= 1;
    j++;
  }

  var mantissa = 0;
  n = i + 23;
  for (; i < n; i++) {
    mantissa = (mantissa << 1) + bin[i];
  }
  return toBinaryString((((signal ? 0x80000000 : 0) + (exponent << 23) + mantissa) | 0), 32);
}