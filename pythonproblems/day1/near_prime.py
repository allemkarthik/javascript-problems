# find the nearest prime number 

num=190
num1=num
orginalnum=num
nextprime=0
prevprime=0
flag=0

while(flag<1):
    num=num+1
    fact=0
    for i in range(2,num):
        if num%i==0:
            fact+=1
            break
    if fact==0:
        nextprime=num
        flag+=1
flag1=0
while(flag1<1):
    num1=num1-1
    fact1=0
    for j in range(2,num1):
        if num1%j==0:
            fact1+=1
            break
    if fact1==0:
        prevprime=num1
        flag1+=1
print(prevprime,orginalnum,nextprime)
if(nextprime-orginalnum>orginalnum-prevprime):
    print(prevprime,"prev is nearest")
else:
    print(nextprime,"nextprime is nearest")