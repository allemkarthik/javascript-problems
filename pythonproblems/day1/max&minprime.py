primenum=[]
for i in range(1,100):
    fact=0
    for j in range(2,i):
        if i%j==0:
            fact+=1
            break

    if fact==0:
        primenum.append(i)
print(primenum)
max=primenum[-1]
min=primenum[0]
print(max,min)

