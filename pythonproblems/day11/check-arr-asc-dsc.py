# chek array is in assending or dessending order
arr=[5,4,3,2,1]
isasc=False
isdesc=False
for i in range(len(arr)-1):
    if arr[i]<arr[i+1]:
        isasc=True
        
    elif arr[i]>arr[i+1]:
        isdesc=True
if isasc:
    print(arr, "is in assending")
elif isdesc:
    print(arr,"is in dessending order")
else:
    print(arr,"is neither assending nor dessnding")
