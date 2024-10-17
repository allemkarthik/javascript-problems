# range of prime numbers 
num1=int(input("enter a start number"))
num2=int(input("enter a end number"))
sum=0
for i in range(num1,num2):
    fact=0
    for j in range(2,i):
        if i%j==0:
            fact+=1
            break
    if fact==0:
        sum+=i
        
print(sum)
    