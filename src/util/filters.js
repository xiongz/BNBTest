export function symbolF(symbol, base) {
  const symbolArry = symbol.split(base)
  return `${base}/${symbolArry[1]}`
}
