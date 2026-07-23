const MONTHS_ID = [
  "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
  "Jul", "Agu", "Sep", "Okt", "Nov", "Des",
];

/**
 * "Rp 2.925.000" — full formatted rupiah, used in transaction rows.
 */
export function formatRupiahFull(amount) {
  const value = Number(amount) || 0;
  return `Rp ${value.toLocaleString("id-ID")}`;
}

/**
 * "Rp 7.800k" — abbreviated rupiah (in thousands), used in summary cards.
 */
export function formatRupiahShort(amount) {
  const value = Number(amount) || 0;
  const thousands = Math.round(value / 1000);
  return `Rp ${thousands.toLocaleString("id-ID")}k`;
}

/**
 * "12 Okt" — short Indonesian date, used in transaction rows.
 */
export function formatDateShort(isoDate) {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;
  return `${date.getDate()} ${MONTHS_ID[date.getMonth()]}`;
}

/**
 * "120kg" — weight with unit, no space, matching the design.
 */
export function formatWeight(kg) {
  const value = Number(kg) || 0;
  return `${value.toLocaleString("id-ID")}kg`;
}
