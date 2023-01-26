import { Sort, TSortValues } from './types'

export const mergeSort = <T extends string | number>(el: T[], sort: TSortValues = Sort.ASC): T[] => {
  if (el.length < 2) return el

  const half = Math.ceil(el.length / 2)
  const l1 = el.slice(0, half)
  const l2 = el.slice(half)

  return merge<T>(mergeSort(l1, sort), mergeSort(l2, sort), sort)
}

const merge = <T extends string | number>(p1: T[], p2: T[], sort: TSortValues) => {
  const res: T[] = []

  while (p1.length && p2.length) {
    const [value1] = p1
    const [value2] = p2

    const isAsc = sort === Sort.ASC ? value1 <= value2 : value1 > value2

    res.push(isAsc ? setValues(p1) : setValues(p2))
  }

  return [...res, ...p1, ...p2]
}

const setValues = <T extends number | string>(el: T[]) => {
  const [val] = el.splice(0, 1)
  return val
}
