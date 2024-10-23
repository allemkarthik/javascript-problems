# find the greatest common diviosr gcm of a given numbers 

def gccd(a,b):
    min=0
    max=0
    if a>b:
        max=a
        min=b
    else:
        max=b
        min=a
    # print(min,max) find the min and max values of a given numbers
    gcd=0
    for i in range(1,min+1):
        if min%i==0 and max%i==0:
            gcd=i
    print(gcd)


gccd(10,15)
gccd(11,20)
gccd(10,200)