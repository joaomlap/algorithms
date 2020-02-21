function howManyFamiliesFit(line) {
  const { B, C, D, E, F, G, H, J } = line;
  const left = B && C && D && E;
  const middle = D && E && F && G;
  const right = F && G && H && J;

  if (left && right) {
    return 2;
  } else if (left || right || middle) {
    return 1;
  } else {
    return 0;
  }
}

function solution(N, S) {
  const initialLine = {
    A: true,
    B: true,
    C: true,
    D: true,
    E: true,
    F: true,
    G: true,
    H: true,
    J: true,
    K: true
  };

  if (!S.length) {
    return N * 2;
  }

  const availableSeating = new Array(N).fill().map(_ => ({ ...initialLine }));
  const reservedSeats = S.split(" ");

  reservedSeats.forEach(
    ([row, letter]) => (availableSeating[row - 1][letter] = false)
  );

  console.log(availableSeating);

  let familiesOfFour = 0;

  availableSeating.forEach(line => {
    familiesOfFour = familiesOfFour + howManyFamiliesFit(line);
  });

  return familiesOfFour;
}

function test() {
  console.log(solution(1, ""));
  console.log(solution(2, "1A 2F 1C"));
}

test();
