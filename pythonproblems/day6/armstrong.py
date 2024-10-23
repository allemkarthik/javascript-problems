# check whether the given number is armstorng number or not
def armst(num1):
    # num1=121
    num2=num1
    num3=num1
    pow=0
    sum=0
    while num1!=0:
        num1%10
        num1=int(num1/10)
        pow+=1

    # print(pow) find the length and power of a number
    while num2!=0:
        last=num2%10
        sum=sum+(last**pow)
        num2=int(num2/10)
    # print(sum)  get the sum and powerr of a given number

    if num3==sum:
        print(num3, "is a armstrong number")
    else:
        print(num3,"is not a armstrong number")

armst(153)
armst(121)
armst(243)
armst(1235)
