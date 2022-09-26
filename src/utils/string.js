import _ from 'lodash'

export function template (str, data) {
  return str.replace(/{{(.+?)}}/g, (key, p1) => data[_.trim(p1)]) || ''
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