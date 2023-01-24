
function encriptar(){
    let mensaje = document.getElementById("text-box").value;
        if (mensaje === mensaje.toLowerCase()){
        
                 mensaje = mensaje.replace(/e/g, "enter")
                 mensaje = mensaje.replace(/i/g, "imes")
                 mensaje = mensaje.replace(/a/g, "ai")
                 mensaje = mensaje.replace(/o/g, "ober")
                 mensaje = mensaje.replace(/u/g, "ufat")
              
                document.getElementById("text-box2").value = mensaje;
                let textarea2 = document.getElementById("text-box2");
                textarea2.style.cssText = `height: ${textarea2.scrollHeight}px; overflow-y: hidden`;
                textarea2.addEventListener("input", function(){
                    this.style.height = "auto";
                    this.style.height = `${this.scrollHeight}px`;
                 });
                
                 document.getElementById("div-output").style.display ="block";
           } else {  
             
                document.getElementById("text-box2").style.display = "none"
                document.getElementById("error").style.display = "block"
                
           }

}

function encriptando() {
    let mensaje = document.getElementById("text-box").value;
    console.log(mensaje.length);
    if(mensaje.length >= 1){
        
        encriptar();
        document.getElementById("text-box2").style.background = "#ffffff";
        document.getElementById("sinTexto").style.display ="none";
        document.getElementById("sinMensaje").style.display ="none";
    }

};

function Desencriptar(){
    let mensaje = document.getElementById("text-box").value;
        if (mensaje === mensaje.toLowerCase()){
            mensaje = mensaje.replace(/enter/g, "e")
            mensaje = mensaje.replace(/imes/g, "i")
            mensaje = mensaje.replace(/ai/g, "a") 
            mensaje = mensaje.replace(/ober/g, "o")
            mensaje = mensaje.replace(/ufat/g, "u")
            document.getElementById("text-box2").value = mensaje;
            document.getElementById("div-output").style.display ="block";
        }
        else {  
             
            document.getElementById("text-box2").style.display = "none"
            document.getElementById("error").style.display = "block"
            
       }
    }

// Desencriptar
function desencriptar() {
    let mensaje = document.getElementById("text-box").value;
    console.log(mensaje.length);
    if(mensaje.length >= 1){
        
        Desencriptar();
        document.getElementById("text-box2").style.background = "#ffffff";
        document.getElementById("sinTexto").style.display ="none";
        document.getElementById("sinMensaje").style.display ="none";
    }
   
};

    function copiar() {
        let copyText = document.querySelector("#text-box2");
        copyText.select();
        document.execCommand("copy");
      }





document.getElementById("div-output").style.display = "none"
document.getElementById("error").style.display = "none"

    


