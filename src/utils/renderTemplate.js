import _ from 'lodash'

export default function template (str, data) {
  return str.replace(/{{(.+?)}}/g, (key, p1) => data[_.trim(p1)]) || ''
}