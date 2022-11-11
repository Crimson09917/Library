def func(n):
    c = 3
    P = 1
    for i in range(1, n+1, 1):
        if c == 3:
            P += 1/(2**i)
            # print("adding 1/"+str(2**i))
            c = 0
        else:
            P -= 1/(2**i)
            # print("subtracting 1/"+str(2**i))
        c += 1

    print(P)

    Q = 1
    for i in range(1, n+1, 1):
        if c == 3:
            Q -= 1/(2**i)
            c = 0
        else:
            Q += 1/(2**i)

        c += 1

    print(Q)

    return P, Q

for j in range(100):
    P, Q = func(j)
    if int(61*(P/Q)) == 81:
        print(j, "is all you need")
        break