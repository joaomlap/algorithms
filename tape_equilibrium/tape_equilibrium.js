// https://app.codility.com/demo/results/trainingECH45R-US4/

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let totalSum = 0;

  for (let i = 0; i < A.length; i++) {
    totalSum = totalSum + A[i];
  }

  let minDiff = 1000 * 100000;
  let currentSum = 0;

  for (let i = 0; i < A.length - 1; i++) {
    currentSum = currentSum + A[i];
    let currentDiff = Math.abs(2 * currentSum - totalSum);

    if (currentDiff < minDiff) {
      minDiff = currentDiff;
    }
  }

  return minDiff;
}
