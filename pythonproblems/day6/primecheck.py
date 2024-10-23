# take a number and check if prime digit exits in a given number or not

def check(num):
    num1=num
    found=False
    while num!=0:
        last=num%10
        # print(last)
    
        fact=0
        for i in range(2,last):
            if last%i==0:
                fact+=1
                break
        if fact==0:
            found=True
            break
        else:
            found=False

        num=int(num/10)
    if found==True:
        print(num1,"contains prime digits")
    else:
        print(num1,"does not contain prime digits")



check(2546)
check(46)
check(466666)
check(46666)
check(466662)