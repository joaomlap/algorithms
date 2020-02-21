// https://app.codility.com/demo/results/trainingSHE9FS-DF9/

function solution(A) {
  const map = {};

  for (let i = 0; i < A.length; i++) {
    const value = String(A[i]);
    map[value] = (map[value] || 0) + 1;
  }

  const solo = Object.keys(map).filter(key => map[key] % 2 != 0);

  return Number(solo[0]);
}
