# fibnocci series
a=0
b=1

for i in range(1,11):
    print(a)
    c=a+b
    a=b
    b=c


# sum of fib numbers
print("sum of fib numbers")
def fib(n):
    if n<0 and n<1:
        return 0
    elif n==1:
        return 1
    else:
        return fib(n-1)+fib(n-2)
print(fib(10))