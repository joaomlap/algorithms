// https://app.codility.com/demo/results/trainingJPUQ9P-26K/

function solution(X, A) {
  const set = new Set();
  let result = -1;

  for (let i = 0; i < A.length; i++) {
    set.add(A[i]);

    if (set.size >= X) {
      result = i;
      break;
    }
  }

  return result;
}
