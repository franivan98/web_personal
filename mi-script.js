let i=0;

const saludar = () => {
    alert("Hola xd");
};

function cambiarTexto(){
    const tituloElemento=document.getElementById("titulo");
    tituloElemento.textContent="Otro titulo "+i;
    i++;
}
function sumar(){
    const num1=parseFloat(document.getElementById("num1").value);
    const num2=parseFloat(document.getElementById("num2").value);
    const res=num1+num2;
    document.getElementById("resultado").textContent=res;
}
function restar(){
    const num1=parseFloat(document.getElementById("num1").value);
    const num2=parseFloat(document.getElementById("num2").value);
    const res=num1-num2;
    document.getElementById("resultado").textContent=res;
}
function multiplicar(){
    const num1=parseFloat(document.getElementById("num1").value);
    const num2=parseFloat(document.getElementById("num2").value);
    const res=num1*num2;
    document.getElementById("resultado").textContent=res;
}
function dividir(){
    const num1=parseFloat(document.getElementById("num1").value);
    const num2=parseFloat(document.getElementById("num2").value);
    if(num2!=0){
        const res=num1+num2;
        document.getElementById("resultado").textContent=res;
    }
    else{
        document.getElementById("resultado").textContent="No se puede dividir por 0";
    }
}