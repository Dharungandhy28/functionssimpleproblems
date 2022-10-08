//1st Assignment
//Functions solutions:
//1.,2. 
function foo(arr,n){
    if(n==undefined){
    return arr[0];
    }
    
     }
    console.log(foo([7,9,0,-2]))

//3.
function foo(arr,n){
    if(n==undefined){
    return arr[0];
    }
    if(n<0){
    return [];
    }
    }
    console.log(foo([1,2,3,4],-3));

//4.
function foo(arr,n){
    if(n==undefined){
    return arr[0];
    }
    if(n<0){
    return [];
    }
    return arr.slice(0,n)
    }
    console.log(foo([1,2,3,4],5));




//2nd Assignment
//Functions solutions:
//1.
function last(arr,n){
    if(n==undefined){
    return arr[arr.length-1];
    }
    }
    console.log(last([7,9,0,-2]));

//2.,3.
function last(arr,n){
    if(n==undefined){
    return arr[arr.length-1];
    }
    return arr.slice(-n)
    }
    console.log(last([7,9,0,-2],6));