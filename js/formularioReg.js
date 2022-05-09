let contenedorReg = document.getElementById('contenedorReg')
contenedorReg.innerHTML = `
<h4 class="centrar">¡Bienvenido! Este es un registro</h4>
<input class="controles" type="text" name="nombres" id="nombres" placeholder="Ingrese su usuario">
<input class="controles" type="password" name="correo" id="password" placeholder="Ingrese su Contraseña">
<input class="botons" type="submit" onclick="nuevo()" value="Registrar">
`

function error(){
  let formulario = document.getElementById('error')
  formulario.classList.add('show')
}

function nuevo() {
    let nombre = document.getElementById('nombres').value
    if (nombre.trim() == "") {
        error();
    }
    let password = document.getElementById('password').value
    if (password.trim() == "") {
       error();
    }

    if(nombre.trim() !== "" && password.trim() !== ""){
        
      let targetURL = 'https://matiug3g.github.io/examentecnico_esolutions/indexTec.html';
      let newURL = document.createElement('a');
      newURL.href = targetURL;
      document.body.appendChild(newURL);
      newURL.click();

    }
}    
