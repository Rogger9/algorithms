import { describe, expect, it } from 'vitest'
import { mergeSort } from '.'
import { nums, words } from '../__mock__'

const resNums = [1, 2, 4, 8, 8, 11]
const resWords = ['!v', 'aa', 'ar', 'b', 'd', 'za']

describe('mergeSort function', () => {
  it('numbers', () => {
    expect(mergeSort(nums)).toEqual(resNums)
  })

  it('numbers desc', () => {
    const res = [...resNums].reverse()
    expect(mergeSort(nums, 'desc')).toEqual(res)
  })

  it('words and special characters', () => {
    expect(mergeSort(words)).toEqual(resWords)
  })

  it('words and special characters desc', () => {
    const res = [...resWords].reverse()
    expect(mergeSort(words, 'desc')).toEqual(res)
  })

  it('empty', () => {
    expect(mergeSort([])).toEqual([])
  })
})
