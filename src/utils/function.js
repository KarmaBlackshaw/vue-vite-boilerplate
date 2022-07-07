export function pipe (initial, fns) {
  return fns.reduce((v, f) => f(v), initial)
}