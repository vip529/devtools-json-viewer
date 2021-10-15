export const isObject = (obj) => obj instanceof Object;

export const getFilteredSet = (keyId, targetSet) => {
  const resultingSet = new Set(targetSet);
  resultingSet.delete(keyId);
  return resultingSet;
};

export const isKeyInSet = (keyId, targetSet) => {
  return targetSet.has(keyId);
};
