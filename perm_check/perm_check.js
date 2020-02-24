// https://app.codility.com/demo/results/trainingTT88ZF-JG7/

function solution(A) {
  const len = A.length;
  const set = new Set(A);

  if (set.size !== len) {
    return 0;
  }

  for (let i = 1; i <= len; i++) {
    if (!set.has(i)) {
      return 0;
    }
  }

  return 1;
}
