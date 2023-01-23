export const isEqual = <T extends Record<K, T[K]>, K extends keyof T>(p1: T, p2: T): boolean => {
  if (!validateEntry(p1, p2)) return false

  const isArrays = Array.isArray(p1) && Array.isArray(p2)

  if (isArrays) return compareArrays(p1, p2)

  const keys1 = Object.keys(p1)
  const keys2 = Object.keys(p2)

  if (keys1.length !== keys2.length) return false

  return keys1.reduce<boolean>((res, key) => {
    const value1 = p1[key as K]
    const value2 = p2[key as K]

    const isArrays = Array.isArray(value1) && Array.isArray(value2)

    if (isArrays && !isEqual(value1, value2)) return false

    const isObjects = isObject(value1) && isObject(value2)

    if ((isObjects && !isEqual(value1, value2)) || (!isObjects && value1 !== value2)) return false

    return res
  }, true)
}

const isObject = <T>(val: T) => typeof val === 'object'

const isArr = <T>(val: T) => Array.isArray(val)

const validateEntry = <T>(p1: T, p2: T) => (isArr(p1) && isArr(p2)) || (!isArr(p2) && !isArr(p1))

const compareArrays = <T extends unknown[]>(arr1: T, arr2: T): boolean => {
  if (arr1.length !== arr2.length) return false

  const res = arr1.filter((el1) => arr2.some((el2) => el2 === el1))

  return res.length === arr2.length
}
