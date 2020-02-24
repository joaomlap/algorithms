# https://app.codility.com/demo/results/trainingHQGYQS-7YP/


def solution(A, B, K):
    divs_until_lower_bound = A // K
    divs_until_upper_bound = B // K
    increment = 1 if A % K == 0 else 0

    return divs_until_upper_bound - divs_until_lower_bound + increment
