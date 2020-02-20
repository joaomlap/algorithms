# https://app.codility.com/demo/results/training45MYT9-23W/


def get_rotated_index(rotation):
    return rotation if rotation < length else rotation - length


def solution(A, K):
    length = len(A)

    if not length or K == 0 or K % length == 0:
        return A

    rotation = K % length
    result = A.copy()

    for i in range(0, length):
        result[get_rotated_index(rotation + i)] = A[i]

    return result
