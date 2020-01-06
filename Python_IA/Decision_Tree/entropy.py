from math import log2


def entropy(*args):
    val = sum([-v * log2(v) for v in args])
    return round(val, 2)


if __name__ == '__main__':
    print(entropy(1/5, 1/5, 3/5))
    print(entropy(2/5, 1/5, 2/5))
    print(entropy(3/4, 1/4))  # n coloca 0
    print(entropy(6/14, 3/14, 5/14))
    print("-------- Gain -------------------")
    # Gain
    print(entropy(6/14, 3/14, 5/14) -
          (5/14 * entropy(1/5, 1/5, 3/5)) -
          (5/14 * entropy(2/5, 1/5, 2/5)) -
          (4/15 * entropy(3/4, 1/4)))
    print(entropy(6/14, 3/14, 5/14) - (7/14 * entropy(4/7, 1/7, 2/7)) - (7/14 * entropy(2/7, 2/7, 3/7)))





