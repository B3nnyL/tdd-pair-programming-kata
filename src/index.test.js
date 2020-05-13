import { Length } from './index'

describe('Length', () => {
  it("should 1 'foot' equals 1 'foot'", () => {
    const length = new Length(1, 'foot')

    expect(length.getVal()).toEqual(1)
    expect(length.getUint()).toEqual('foot')
  })

  it("should 1 'foot' equals 12 inches", () => {
    const result = new Length(1, 'foot').parseTo('inch')

    expect(result.getVal()).toEqual(12)
    expect(result.getUint()).toEqual('inch')
  })
})
