# take an array return when two elements are equal to 10
arr=[1,2,3,4,5,6,7,8,10]
res=[]
for i in range(len(arr)):
    count=0
    for j in range(len(arr)):
        if arr[i]+arr[j]==10:
            res.append([arr[i],arr[j]])
            count+=1
            # break
    
    
print(res)