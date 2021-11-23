class twoD extends Array {
  constructor({ height, width, initalize = true, fill = (x, y) => null }) {
    super();

    this.height = height;
    this.width = width;

    // todo create from array

    if (initalize) {
      for (let y = 0; y <= height; y++) {
        const row = [];
        for (let x = 0; x <= width; x++) {
          row.push(fill(x, y));
        }
        this.push(row);
      }
    }
  }

  rotate(direction) {
    const next = [];
    if (direction !== "flipX" && direction !== "flipY") {
      this.forEach((_, n) => next.push([]));
    }

    const height = this.height;
    const width = this.width;

    if (direction === "right") {
      for (let x = 0; x <= width; x++) {
        for (let y = height; y >= 0; y--) {
          next[x].push(this[y][x]);
        }
      }
    } else if (direction === "left") {
      for (let y = 0; y <= height; y++) {
        for (let x = width; x >= 0; x--) {
          next[width - x].push(this[y][x]);
        }
      }
    } else if (direction === "flipX") {
      for (let y = 0; y <= height; y++) {
        next.push([...this[y]].reverse());
      }
    } else if (direction === "flipY") {
      for (let y = height; y >= 0; y--) {
        next.push([...this[y]]);
      }
    }

    if (direction === "right" || direction === "left") {
      this.width = height;
      this.height = width;
    }

    this.forEach((_, x) => (this[x] = undefined));
    next.forEach((x, n) => (this[n] = x));
  }

  rotateRight() {
    this.rotate("right");
  }

  rotateLeft() {
    this.rotate("left");
  }

  flipX() {
    this.rotate("flipX");
  }

  flipY() {
    this.rotate("flipY");
  }
}

export default twoD;
