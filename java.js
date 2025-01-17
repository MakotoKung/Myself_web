let t = "A";
var code = t.codePointAt(0);
console.log(code);

let x = Math.floor(Math.random()*62 +62);

let i =0;
for(let i=0;i<=54;++i){
    let x = Math.floor(Math.random()*62 +62);
    document.write(String.fromCharCode(x));
    
    for(let j=0;j<=140;++j){
        document.write(" ");
        let x = Math.floor(Math.random()*62 +62);
        document.write(String.fromCharCode(x));

    }
    document.write("<br>")
}
//loading 
window.onload = function(){
    setTimeout(function(){
        
    },3000)
    setTimeout(function(){
        
    },3000)
    
}