# count duplicates in array
arr=[1,2,4,53,2,1,4,5,3,2,1,5,3]
res=[]
dup=[]
for i in arr:
   
    if i not in res:
        res.append(i)
    else:
        dup.append(i)
for j in dup:
    count=0
    for k in arr:
        if j==k:
            count+=1
        
    print(j,"is present",count,"times")