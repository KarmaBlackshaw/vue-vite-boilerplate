export function template (str, data) {
  return str.replace(/{{(.+?)}}/g, (_, p1) => data[trim(p1)]) || ''
}

export function trim (str) {
  return str && str.trim()
}

export function truncate (str, maxLength) {
  if (!str) {
    return ''
  }

  return str.length > maxLength
    ? `${str.substring(0, maxLength)}…`
    : str
}

export function random () {
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}