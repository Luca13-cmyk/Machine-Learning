from math import sqrt


def knn(vtOne, vtTwo, *args):
    if type(vtOne) == list and type(vtTwo) == list:
        subt = list(zip(vtOne, vtTwo))
        raiz = list(n[0] - n[1] for n in subt)
        de = [round(n**2, 2) for n in raiz]
        de = round(sum(de), 2)
        de = sqrt(de)
        return de
    return "knn deve conter listas"


if __name__ == '__main__':
    print(knn([0.9, 0.0, 0.5, 0.1], [0.0, 0.2, 0.2, 0.8]))  # Vetores com seus dados
    print(knn([0.9, 0.0, 0.5, 0.1], [0.6, 0.0, 0.3, 0.0]))  # Vetores com seus dados
    print(knn(4, 5)) 




