function insert(massege) {
    const content = document.getElementById('display').innerText;
    const operator= new Set(['+','-','*','/','%','.']);
    const last = content.slice(-1);
    const lastindex= content.lastIndexOf('.');
    if ((operator.has(last)&&operator.has(massege))) {
        return;
    }
    else {
        if (content == "" && (massege == "*" || massege == "/" || massege == "%")) {
            alert('starting of expresion should only contains either number or positive or negative')
        }
        else {
            document.getElementById('display').innerText = content + massege;
        }
    }
}
function result() {
    const content= document.getElementById('display').innerText;
    
    const result = eval(content);
    document.getElementById('display').innerText = result;
}
document.getElementById('clear').addEventListener('click',()=>{
    document.getElementById('display').innerText='';
});
function backspace(){
    const content= document.getElementById('display').innerText;
    const len= content.length-1;
    document.getElementById('display').innerText=content.slice(0,len);
    
}
    