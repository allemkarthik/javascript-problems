# find the missing number in an array
arr=[1,5,8,10]
max=arr[0]
min=arr[0]
for i in arr:
    if i>max:
        max=i
    elif i<min:
        min=i
# print(max,min)
for j in range(min,max+1):
    if j not in arr:
        print(j,"is the missing number")
