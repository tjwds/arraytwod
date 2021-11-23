import twoD from "./index.js";

test("Can create a twoD", () => {
  const something = new twoD({
    width: 3,
    height: 3,
    fill: (x, y) => `${x}, ${y}`,
  });

  expect(JSON.stringify(something)).toBe(
    '[["0, 0","1, 0","2, 0","3, 0"],["0, 1","1, 1","2, 1","3, 1"],["0, 2","1, 2","2, 2","3, 2"],["0, 3","1, 3","2, 3","3, 3"]]'
  );
});

test("Rotations", () => {
  const something = new twoD({
    width: 3,
    height: 3,
    fill: (x, y) => `${x}, ${y}`,
  });

  something.rotateRight();
  expect(JSON.stringify(something)).toBe(
    '[["0, 3","0, 2","0, 1","0, 0"],["1, 3","1, 2","1, 1","1, 0"],["2, 3","2, 2","2, 1","2, 0"],["3, 3","3, 2","3, 1","3, 0"]]'
  );
  something.rotateLeft();

  something.rotateLeft();
  expect(JSON.stringify(something)).toBe(
    '[["3, 0","3, 1","3, 2","3, 3"],["2, 0","2, 1","2, 2","2, 3"],["1, 0","1, 1","1, 2","1, 3"],["0, 0","0, 1","0, 2","0, 3"]]'
  );
  something.rotateRight();

  something.flipX();
  expect(JSON.stringify(something)).toBe(
    '[["3, 0","2, 0","1, 0","0, 0"],["3, 1","2, 1","1, 1","0, 1"],["3, 2","2, 2","1, 2","0, 2"],["3, 3","2, 3","1, 3","0, 3"]]'
  );
  something.flipX();

  something.flipY();
  expect(JSON.stringify(something)).toBe(
    '[["0, 3","1, 3","2, 3","3, 3"],["0, 2","1, 2","2, 2","3, 2"],["0, 1","1, 1","2, 1","3, 1"],["0, 0","1, 0","2, 0","3, 0"]]'
  );
});
