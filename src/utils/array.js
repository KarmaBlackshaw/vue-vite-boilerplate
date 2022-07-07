export function toArray (arr) {
  return Array.isArray(arr) ? arr : [arr]
}

export function last (arr) {
  return arr[arr.length - 1]
}