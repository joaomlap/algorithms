# https://app.codility.com/demo/results/trainingBTHB6D-6BJ/

import sys


def solution(A):
    presum = []
    total_sum = 0

    for number in A:
        total_sum = total_sum + number
        presum.append(total_sum)

    minimal_diff = sys.maxsize

    for i in range(1, len(presum)):
        left = presum[i - 1]
        right = total_sum - left
        diff = abs(left - right)

        if (diff < minimal_diff):
            minimal_diff = diff

    return minimal_diff
