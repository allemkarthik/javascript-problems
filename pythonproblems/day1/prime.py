num=int(input("enter a number:"))

fact=0
for i in range(2,num):
    if num%i==0:
        fact+=1
        break
if fact==0:
    print("prime")
else:
    print("not prime")
    
    

