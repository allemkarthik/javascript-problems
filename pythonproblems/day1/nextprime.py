# next prime
num=int(input("enter a number:"))
next=0

while next<1:
    num=num+1
    fact=0

    for i in range(2, num):
        if num%i==0:
            fact+=1
            break
    if fact==0:
        print(num,"is next prime")
        next+=1