'use strict';
var answer = []
var rs = [];
var x = [];

function moveQueen(row, col) {
  let line = [];
  placeQueen(0, col);
  for (var i = 0; i < rs.length; i++) {
    line.push(rs[i])
    if (line.length == col) {
      answer.push(line)
      print(line);
      line = [];
    }
  }

}

function placeQueen(n, col) {
  if (n == col) {
    x.forEach((i) => {
      rs.push(i);
    });
  } else {
    for (var i = 0; i < col; i++) {
      if (is_free(i, n)) {
        x[n] = i;
        placeQueen(n + 1, col);
      }
    }
  }
}

function is_free(ix, iy) {
  for (var i = 0; i < iy; i++) {
    if ((x[i] == ix) || (Math.abs(x[i] - ix) == Math.abs(i - iy))) {
      return false;
    }
  }
  return true;
}

function print(x) {
  let col = x.length;
  let row = Math.max(...x) + 1;
  console.log("+-----------------------+");
  for (var i = 0; i < row; i++) {
    process.stdout.write("|");
    for (var j = 0; j < col; j++) {
      if (j == x[i]) {
        process.stdout.write("Q.|");
      } else {
        process.stdout.write("  |");
      }
    }
    console.log()
    console.log("+-----------------------+");
  }
  console.log()
}

moveQueen(8, 8);

// the answer set
// console.log(answer)

// total number of the answer
// console.log(answer.length)
