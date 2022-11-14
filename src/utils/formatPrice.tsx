export default function formatPrice(price: number) {
  const digits = price.toString().split('');

  for (let i = digits.length - 3; i >= 0; i -= 3) {
    digits.splice(i, 0, ' ');
  }

  digits.push(' ₽');

  return digits.join('');
}
