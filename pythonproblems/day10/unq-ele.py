# print unique elements in array
arr=[1,2,4,5,1,2,4,5,8,7,9,6,3]
res=[]
dup=[]
unq=[]
for i in arr:
    if i not in res:
        res.append(i)
    else:
        dup.append(i)

for k in res:
   
    if k not in dup:
        unq.append(k)
print(unq)
