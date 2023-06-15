export default function getKey (key, obj) {
  return key in obj ? obj.default : obj[key]
}