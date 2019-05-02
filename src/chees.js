export function distance(point1, point2) {
  const a = point2.x - point1.x;
  const b = point2.y - point1.y;
  return Math.sqrt(a*a + b*b);
}

export function* initBoard() {
  for (let x = 0; x < 8; x += 1) {
    for (let y = 0; y < 8; y += 1) {
      yield {x, y};
    }
  }
}
