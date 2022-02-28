export function parseDateToISO(date) {
  return new Date(date).toISOString().slice(0, 10)
}
