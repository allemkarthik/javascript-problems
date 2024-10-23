# add star in the place of duplicate
arr=[1,2,2,3,2,1,5,2,1,52,2,5]
res=[]
for i in arr:
    if i not in res:
        res.append(i)
    else:
        res.append("*")
print(res)