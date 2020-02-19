# https://app.codility.com/demo/results/trainingZAS2CB-N83/


def solution(N):
    biggest_gap = 0
    current_gap = 0
    binary_str = str(bin(N)).strip("0b")

    for i in binary_str:
        if i == "1":
            if current_gap > biggest_gap:
                biggest_gap = current_gap
            current_gap = 0
        elif i == "0":
            current_gap = current_gap + 1

    return biggest_gap
