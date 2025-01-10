//!Pattern Probelm for 5rows and 5 colums 
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        document.writeln("*")
    }
        document.write("<br>")
}





//! left angled triangle
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i>=j){
            document.writeln("*")
        }else{
            document.writeln("&nbsp;")
        }
    }
    document.write("<br>")
}





//! right angled triangle
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(j>=i){
            document.writeln("*")
        }else{
            document.writeln("&nbsp;")
        }
    }
    document.write("<br>")
}







//! square (x)
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i==j  || i+j ==6){
            document.writeln("*")
        }else{
            document.writeln("&nbsp;&nbsp;&nbsp;&nbsp")
        }
    }
    document.write("<br>")
}