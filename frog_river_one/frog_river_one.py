# https://app.codility.com/demo/results/trainingCCBPGX-AQW/


def solution(X, A):
    leaves_path = set([])
    result = -1

    for index, leave in enumerate(A):
        leaves_path.add(leave)

        if (len(leaves_path) == X):
            result = index
            break

    return result
