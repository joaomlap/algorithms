// https://app.codility.com/demo/results/trainingG6BPDV-4YE/

function solution(N, A) {
  let counters = new Array(N).fill(0);
  let max = 0;
  let reset = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0 && A[i] <= N) {
      let ref = counters[A[i] - 1];
      ref = ref > reset ? ref + 1 : reset + 1;
      counters[A[i] - 1] = ref;
      max = ref > max ? ref : max;
    } else {
      reset = max;
    }
  }

  for (let i = 0; i < N; i++) {
    if (counters[i] < reset) {
      counters[i] = reset;
    }
  }

  return counters;
}
