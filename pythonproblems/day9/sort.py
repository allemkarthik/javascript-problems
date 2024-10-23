# sort the array in ascending order
arr=[5,5,47,82,5,6,5,1,4,2]

for i in range(len(arr)):
    for j in range(len(arr)-1):
        if arr[i]<arr[j]:
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
print(arr)


# sort the array in decesding order
arr1=[5,5,47,82,5,6,5,1,4,2]
for k in range(len(arr1)):
    for h in range(len(arr1)-1):
        if arr1[k]>arr1[h]:
            temp=arr1[k]
            arr1[k]=arr1[h]
            arr1[h]=temp
print(arr1)