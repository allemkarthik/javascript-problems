# remove duplicates values in an array
arr=[1,2,3,4,5,6,2,45,5,6,2,4,58,2]
res=[]
dup=[]
for i in arr:
    if i not in res:
        res.append(i)
    else:
        dup.append(i)
print(res,dup)