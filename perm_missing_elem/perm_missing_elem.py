# https://app.codility.com/demo/results/trainingXGYGGP-FVX/


def solution(A):
    if (not len(A)):
        return 1

    A.sort()
    result = len(A) + 1

    for i in range(0, len(A)):
        if (i + 1 != A[i]):
            result = i + 1
            break

    return result
