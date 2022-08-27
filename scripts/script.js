 const textoInputEncriptar = document.querySelector(".texto-encriptar"); 
 const  imagenOculta = document.querySelector(".imagen");
 const textoInputDesencriptar = document.querySelector(".texto-desencriptar");
 const btnCopy = document.querySelector(".copiar");
 const textoDerecho = document.querySelector(".texto-derecho");

  function validarCaracteres(textoInput) {
    let caracteresNoAceptados = ["0","1","2","3","4","5","6","7","8","9","-","*","@","+","!","¡","$","%",".","#","(",")",":",";","/","'","?","¿","<",">",",","=","[","]","{","&","}","°","ñ","Á","ú","ó","í","á","é","ü","É","Í","Ó","Ú","Ü","Ñ","Ñ"];

    textoInput = textoInput.toLowerCase();
     let validacion = false;

        for (let i = 0; i < caracteresNoAceptados.length; i++){
             if (textoInput.includes(caracteresNoAceptados[i])){
             console.log("tienesNumeros");
             validacion = true;
            }
            
        }
        
        return validacion;
  }

  function btnencriptar(){
    //aqui le digo que si en la caja de mensaje no tiene string o solo espacio aparezca alert.
   if (String(textoInputEncriptar.value).trim() === "" || validarCaracteres(textoInputEncriptar.value)){ 
      alert("debe mandar solo texto");
    }
      else {
        const textoencriptado = encriptarmensaje (textoInputEncriptar.value);
       textoInputDesencriptar.value = textoencriptado;
       imagenOculta.style.visibility = "hidden";
       textoInputDesencriptar.style.visibility = "visible";
       textoDerecho.style.visibility = "visible";
       textoInputEncriptar.value = "";
      }
  }
   
  function encriptarmensaje(stringencriptar){ 
   let matrizCodigo = [["a", "ai"],["e","enter"],["i", "imes"],["o", "ober"],["u", "ufat"]];
   stringencriptar = stringencriptar.toLowerCase();
   let encripitacion = stringencriptar;

    for (let i = 0; i < matrizCodigo.length; i++){
      if (stringencriptar.includes(matrizCodigo[i][0])){
        encripitacion = encripitacion.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]); 
      }
    }
   stringencriptar = encripitacion;
   return stringencriptar;
  }

  function desencriptarmensaje(stringdesencriptar){
   let matrizCodigo = [["ai", "a"],["enter","e"],["imes", "i"],["ober", "o"],["ufat", "u"]];
   stringdesencriptar = stringdesencriptar.toLowerCase();
   let encripitacion = stringdesencriptar;
      
   for (let i = 0; i < matrizCodigo.length; i++){
      if (stringdesencriptar.includes(matrizCodigo[i][0])){
        encripitacion = encripitacion.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]); 
      }
    }
    stringdesencriptar = encripitacion;
    return stringdesencriptar;
  }

  function btndesencriptar() {
    const textodescriptado = desencriptarmensaje(textoInputDesencriptar.value); 
    textoInputEncriptar.value = textodescriptado;
    textoInputDesencriptar.value = "";
    imagenOculta.style.visibility = "visible";
    textoInputDesencriptar.style.visibility = "hidden";
    textoDerecho.style.visibility = "hidden";
  }

  function copiaecribir() {
    console.log("llegue") 
    let texto = textoInputDesencriptar; 
    texto.select(); 
    texto.setSelectionRange(0, 99999);
    console.log("llegue", texto); 
    document.execCommand("copy"); 
  }
    copiaecribir();