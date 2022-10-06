export function pipe (initial, fns) {
  return fns.reduce((v, f) => f(v), initial)
}

export function getKey (key, obj) {
  return obj[key] === undefined ? obj.default : obj[key]
}