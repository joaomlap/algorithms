// https://app.codility.com/demo/results/trainingHQGYQS-7YP/

function solution(A, B, K) {
  const divsUntilLowerBound = Math.floor(A / K);
  const divsUntilUpperBound = Math.floor(B / K);
  const increment = A % K == 0 ? 1 : 0;

  return divsUntilUpperBound - divsUntilLowerBound + increment;
}
