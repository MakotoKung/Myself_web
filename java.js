//var x = Math.floor(Math.random()*62 +62);
let a = document.getElementById("loading");

let i =0;

//loading 
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