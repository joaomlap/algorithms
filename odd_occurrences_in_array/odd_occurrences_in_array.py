# https://app.codility.com/demo/results/trainingRUHE58-CX5/


def solution(A):
    map = {}

    for number in A:
        if (isinstance(map.get(number), int)):
            map[number] = map[number] + 1
        else:
            map[number] = 1

    result = -1

    for number in map:
        if (map[number] % 2 != 0):
            result = number

    return result
