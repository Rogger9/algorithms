import { describe, expect, it } from 'vitest'
import { isEqual } from '.'
import { nums, person, user } from '../__mock__'

const copyUser = { ...person }
const copyArr = [...nums]

describe('isEqual fuction', () => {
  it('compare two identical objects', () => {
    expect(isEqual(person, copyUser)).toBe(true)
  })

  it.only('compare two different objects', () => {
    copyUser.name = 'newName'
    const { name, ...rest } = copyUser
    name
    expect(isEqual(person, copyUser)).toBe(false)
    expect(isEqual(person, rest)).toBe(false)
  })

  it('compare two objects with properties that are objects', () => {
    const copy = { ...user }
    expect(isEqual(user, copy)).toBe(true)
  })

  it('compare two identical arrays', () => {
    expect(isEqual(nums, copyArr)).toBe(true)
  })

  it('compare two different arrays', () => {
    const [el, ...rest] = copyArr
    expect(isEqual(nums, rest)).toBe(false)
    expect(isEqual(nums, [el])).toBe(false)
  })

  it('compare two equal but unordered arrays', () => {
    const copy = [...nums].reverse()
    expect(isEqual(nums, copy)).toBe(true)
  })

  it('compare two objects with properties that are arrays', () => {
    const obj = { a: 'string', b: nums }
    const newObj = { b: [...nums].reverse(), a: 'string' }
    expect(isEqual(obj, newObj)).toBe(true)
    newObj.b[0] = 12
    expect(isEqual(obj, newObj)).toBe(false)
  })

  it('compare two objects with properties that are arrays and objects', () => {
    const data = { ...user, nums }
    const copy = JSON.parse(JSON.stringify(data))
    expect(isEqual(data, copy)).toBe(true)
    copy.nums[0] = 21
    expect(isEqual(data, copy)).toBe(false)
  })

  it('compare object with array', () => {
    expect(isEqual({}, [])).toBe(false)
    expect(isEqual([], [])).toBe(true)
    expect(isEqual([], {})).toBe(false)
    expect(isEqual({}, {})).toBe(true)
  })
})
