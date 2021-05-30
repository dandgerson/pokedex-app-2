import toCapitalizeFirstLetter from './toCapitalizeFirstLetter'

describe('toCapitalizeFirstLetter', () => {
  test('Must return string with Capitalize first letter', () => {
    const result = toCapitalizeFirstLetter('sampleString')

    expect(result).toEqual('SampleString')
  })
})
