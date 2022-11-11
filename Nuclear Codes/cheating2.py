
import math
import itertools

def convertTuple(tup):
    Str = ''
    for item in tup:
        Str = Str + str(item)
    return int(Str)

def compareTuples(t1, t2):
    if t1[0] == t2[0] and t1[1] == t2[1] and t1[2] == t2[2]:
        return True

def find():
    maxArea = 0
    maxNumsUsed = []
    minArea = 100000000000
    minNumsUsed = []
    arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    mainPermutations = list(itertools.permutations(arr1, 3))

    for n in range(len(mainPermutations)):

        arr2 = arr1.copy()

        for i in mainPermutations[n]:
            arr2.remove(i)

        subPermutations = list(itertools.permutations(arr2, 3))
        
        for m in range(len(subPermutations)):
            arr3 = arr2.copy()

            for j in subPermutations[m]:
                arr3.remove(j)

            lastPermutation = list(itertools.permutations(arr3, 3))

            a = mainPermutations[n]
            b = subPermutations[m]
            c = lastPermutation[0]

            if compareTuples(a, (9, 6, 3)) and compareTuples(b, (8, 5, 2)) and compareTuples(c, (7, 4, 1)):
                print("We're testing em")

            aN = convertTuple(a)
            bN = convertTuple(b)
            cN = convertTuple(c)

            
            division = (bN**2 + cN**2 - aN**2)/(2*bN*cN)
            if division <= 1 and division >= -1:
                # print(division)
                A = math.acos(division)
                Area = 0.5*bN*cN*math.sin(A)
                if Area > maxArea:
                    maxArea = Area
                    maxNumsUsed = [a, b, c]
                if Area < minArea and Area > 0.0001:
                    minArea = Area
                    minNumsUsed = [a, b, c]

    return maxArea, minArea, maxNumsUsed, minNumsUsed

# print(find())
P, Q, x, y = find()
print(P, Q, x, y)

print(P/Q)