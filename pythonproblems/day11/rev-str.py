# reverse a array string based on length in assending order
arr=["hi","heelo","hlo","hoya","buddy"]

for i in range(len(arr)):
    for j in range(len(arr)):
        if len(arr[i])<len(arr[j]):
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
print(arr)

# reverse a string in desecding order

arr1=["hi","heelo","hlo","hoya","buddy"]
for k in range(len(arr1)):
    for h in range(len(arr1)):
        if len(arr1[k])>len(arr1[h]):
            temp=arr1[k]
            arr1[k]=arr1[h]
            arr1[h]=temp
print(arr1)