// https://app.codility.com/demo/results/trainingC5NWNY-Q9W/

function solution(A) {
  let result = 1;
  const sorted = A.sort((a, b) => a - b);
  const setSorted = new Set(sorted);

  for (let i = 1; i <= setSorted.size; i++) {
    if (!setSorted.has(result)) {
      break;
    } else {
      result++;
    }
  }

  return result;
}
