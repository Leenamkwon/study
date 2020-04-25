import typeChecker from '../type-checker'

describe('타입 테스트', function() {
  it('문자열 타입은 string 이다.', function() {
    expect(typeChecker('한글', 'string')).toEqual(true)
  })

  it('숫자열 타입은 number 이다.', function() {
    expect(typeChecker(10, 'number')).toEqual(true)
  })
})
