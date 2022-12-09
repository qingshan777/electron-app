export const stringToHex = (str: string) => {
  var val = ''
  for (var i = 0; i < str.length; i++) {
    if (val == '') val = str.charCodeAt(i).toString(16)
    else val += str.charCodeAt(i).toString(16)
  }

  return val
}
