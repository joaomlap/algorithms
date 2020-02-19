// https://app.codility.com/demo/results/trainingNPRYZ8-U6H/

function solution(N) {
  let biggestGap = 0;
  let currentGap = 0;
  const binaryStr = N.toString(2);

  for (const b of binaryStr) {
    if (b === "1") {
      if (currentGap > biggestGap) {
        biggestGap = currentGap;
      }

      currentGap = 0;
    } else {
      currentGap += 1;
    }
  }

  return biggestGap;
}
