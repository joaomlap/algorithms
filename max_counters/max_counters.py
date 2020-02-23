# https://app.codility.com/demo/results/trainingW8Y4HV-GDD/


def solution(N, A):
    containers = [0] * N
    max_counter = 0
    current_max = 0

    for value in A:
        if (value > N):
            max_counter = current_max
        else:
            if (containers[value - 1] < max_counter):
                containers[value - 1] = max_counter

            containers[value - 1] = containers[value - 1] + 1

            if (current_max < containers[value - 1]):
                current_max = containers[value - 1]

    for i in range(len(containers)):
        if (containers[i] < max_counter):
            containers[i] = max_counter

    return containers
