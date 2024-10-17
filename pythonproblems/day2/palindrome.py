# check whether the given number is a palindrome or not
num=2322
num1=num
rev=0
while(num!=0):
    last=num%10
    rev=rev*10+last
    num=int(num/10)
if num1==rev:
    print(num1,"is a palindrome")
else:
    print(num1,"is a not a palindrome")

# check whether the given string  is a palindrome or not
str="mo M"
upd=str.replace(" ",'').lower()
reverse=upd[::-1]
if upd==reverse:
    print(str,"is a palindrome")
else:
    print(str,"is not")
