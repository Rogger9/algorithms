import { describe, expect, it } from 'vitest'
import { mergeSort } from '.'
import { nums, words } from '../__mock__'

const resNums = [1, 2, 4, 8, 8, 11]

describe('mergeSort function', () => {
  it('numbers', () => {
    expect(mergeSort(nums)).toEqual(resNums)
  })

  it('words and special characters', () => {
    const res = ['!v', 'aa', 'ar', 'b', 'd', 'za']
    expect(mergeSort(words)).toEqual(res)
  })

  it('empty', () => {
    expect(mergeSort([])).toEqual([])
  })
})
