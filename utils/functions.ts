export function toBinaryString(num: number, bits = 8) {
  if (bits % 8 !== 0) throw new Error('bits value must be multiple of 8');
  let binary = '';
  while (num > 0) {
    binary = binary + num % 2;
    num = Math.floor(num / 2);
  }
  binary = '0'.repeat(bits - binary.length) + binary.split('').reverse().join('');
  return binary;
}