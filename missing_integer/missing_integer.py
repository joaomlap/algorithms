# https://app.codility.com/demo/results/trainingMKFNH5-M5Z/


def solution(A):
    occurrences_map = [False] * (len(A) + 1)

    for number in A:
        if (1 <= number <= len(A) + 1):
            occurrences_map[number - 1] = True

    result = 1

    for number in range(len(A) + 1):
        if (not occurrences_map[number]):
            result = number + 1
            break

    return result
