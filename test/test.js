const assert = require('assert')
const { distance, initBoard } = require('../src/chees');

describe('chess test', () => {
  it('distance test 2', () => {
    const point1 = {x: 0, y: 0};
    const point2 = {x: 2, y: 1};
    const res = distance(point1, point2);
    assert.equal(res, 2.23606797749979, '00, 21');
  
    const point3 = {x: 7, y: 7};
    const point4 = {x: 5, y: 6};
    const res2 = distance(point3, point4);
    assert.equal(res2, 2.23606797749979, `${res2}`);

    const point5 = {x: 7, y: 7};
    const point6 = {x: 5, y: 7};
    const res3 = distance(point5, point6);
    assert.equal(res3, 2, "77, 57");
  })
  it ('points generate test', () => {
    const board = [...initBoard()];
    assert.equal(board.length, 64);
    assert.equal(board[0].x, 0);
  })

  it ('convert input to point', () => {

  }) 
})