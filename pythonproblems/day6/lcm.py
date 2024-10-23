# check lcm of a given numbers

def lccm(a,b):
   
    min=0
    max=0
    if a>b:
        max=a
        min=b
    elif a<b:
        min=a
        max=b
    # print(min,max) find the min and max of a given numbers
    if (max%min==0):
        print(max,"is the lcm")
    else:
        check=max
        while True:
            check+=max
            if check%min==0 and check%max==0:
                print(check,"is the lcm")
                break


    
lccm(10,15)
lccm(10,20)
lccm(100,15)
