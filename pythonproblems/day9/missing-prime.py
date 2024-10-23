# find the missing prime in an array
arr=[5,4,8,9,7,10,15]
max=arr[0]
for i in arr:
    if i>max:
        max=i

for j in range(1,max+1):
    fact=0
    for k in range(2,j):
        if j%k==0:
            fact+=1
            break
    if fact==0 and j not in arr:
        print(j,"is the missing prime")

