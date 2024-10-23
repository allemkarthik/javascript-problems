// find all elements in an matrix except middle element
let mat=[[1,2,30],[4,5,6],[7,8,9]]
matrix=[]
mid_row=Math.floor(mat.length/2)
mid_col=Math.floor(mat[mid_row].length/2)

for(i=0;i<mat.length;i++){
    emp=[]
    for(j=0;j<mat[i].length;j++){
        if(i==mid_row && j==mid_col){
            continue
        }
        else{
            emp.push(mat[i][j])
            
        }
    }
    matrix.push(emp)
}
console.log(matrix);


