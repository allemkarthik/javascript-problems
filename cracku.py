# cracku problems 
# write a function to check given string is palindrome using recursion
import re
def palindrome(str):
    s=re.sub(r'[^a-zA-Z0-9]',"",str).lower()
    if len(s)<2:
        return True
    elif s[0]!=s[-1]:
        return False
    else:
        return palindrome(s[1:-1])

res=palindrome("A man, a plan, a canal: Panama")
res1=palindrome("No 'x' in Nixon")
print(res,res1)


# find the medeian of sorted array
def add(arr1,arr2):
    s=sorted(arr1+arr2)
    mid=len(s)//2
    if len(s)%2==0:
        return (s[mid-1]+s[mid])/2
    else:
        return s[mid]


    
res=add([1,4],[2,3])
print(res)

# find the maximum that can be obtained by multipying any two elements of the array

def maxpro(arr):
    res1=[]
    for i in range(len(arr)):
        for j in range(len(arr)):
            if i !=j:
                k=arr[i]*arr[j]
                res1.append(k)
    
    max=res1[0]            
    for h in res1:
        if h>max:
            max=h
    print(max,"is the higgest product number")
        
maxpro([0,-4,6,-9,4,6,7,-8])
