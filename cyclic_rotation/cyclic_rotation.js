function getRotatedIndex(rotation, length) {
  return rotation >= length ? rotation - length : rotation;
}

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const length = A.length;

  if (!length || K == 0 || K % length) {
    return A;
  }

  let rotation = K % length;

  const result = A.slice();

  for (let i = 0; i < length; i++) {
    result[getRotatedIndex(rotation + i)] = A[i];
  }

  return result;
}
