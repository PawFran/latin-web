export function randomKey(obj) {
    const keys = Object.keys(obj);
    return keys[ keys.length * Math.random() << 0 ];
};

export function randomKeyWithFilter(obj, allowableValues) {
  const keys = Object.keys(obj).filter(value => -1 !== allowableValues.indexOf(value));
  return keys[ keys.length * Math.random() << 0 ];
};