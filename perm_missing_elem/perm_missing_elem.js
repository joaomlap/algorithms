// https://app.codility.com/demo/results/trainingGB8KCJ-3ZC/

function solution(A) {
  if (A.length < 1) {
    return 1;
  }

  const sorted = A.sort((a, b) => a - b);
  let result = A.length + 1;

  for (let i = 1; i <= A.length; i++) {
    if (i !== sorted[i - 1]) {
      result = i;
      break;
    }
  }

  return result;
}
