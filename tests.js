require('chai').should()
const subject = require('./Conway')

it('a cell with fewer than two neighbors dies', () => {
  let initial = [0,1,0]
  let expected = [0,0,0]
  subject(initial).should.deep.equal(expected)
})

it('a cell with fewer than two neighbors dies, with a longer array', () => {
  let initial = [0,0,1,1,1,0]
  let expected = [0,0,0,1,0,0]
  subject(initial).should.deep.equal(expected)
})

it('any cell with two live neighbors lives on', () => {
  let initial = [1,1,1]
  let expected = [0,1,0]
  subject(initial).should.deep.equal(expected)
})