export function currencyBeautiful (value) {
  return new Intl.NumberFormat('fr-fr', { style: 'currency', currency: 'EUR' }).format(value);
}