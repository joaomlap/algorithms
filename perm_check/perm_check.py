# https://app.codility.com/demo/results/trainingWP6RAC-RYA/


def solution(A):
    result = 1

    permutation = set(sorted(A))

    if (len(permutation) == len(A)):
        for index, number in enumerate(permutation):
            if (index + 1 != number):
                result = 0
    else:
        result = 0

    return result
