# find the length of a number

def lenn(num):
    length=0
    while num!=0:
        num%10
        num=int(num/10)
        length+=1
    print(length)

lenn(212354)
lenn(2123541685)
lenn(212354254286)

# reverse a given number
def rev(num1):
    rev=0
    while num1!=0:
        last=num1%10
        rev=rev*10+last
        num1=int(num1/10)
    print(rev)

rev(5449865)
rev(54454769865)
rev(5442874319865)