# find the min and max values in an array
arr=[1,2,3,4,6,8,6,2,65,6,2,2]
min=arr[0]
max=arr[0]
for i in arr:
    if i>max:
        max=i
    elif i<min:
        min=i
print(min,max)

# sum of minmum and maximum
arr1=[1,2,3,4,6,8,6,2,65,6,2,2]
min1=arr1[0]
max1=arr1[0]
for i in arr1:
    if i>max1:
        max1=i
    elif i<min1:
        min1=i

print(min+max)