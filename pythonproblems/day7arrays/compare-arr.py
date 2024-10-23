# compare two array values and length return true or flase
def arr(arr1,arr2):
    if len(arr1)!=len(arr2):
        print(False)
    else:
        print(arr1==arr2)



arr([1,2,5],[1,2,3])