let contenedorForm = document.getElementById('contenedorForm')
contenedorForm.innerHTML = ` <form action="https://formsubmit.co/sorucomatias@gmail.com" method="POST">

<p>¿Como te llamas?</p>
<input type="text" class="field" name="casilla1" id="nombre" required placeholder="Nombre y apellido"><br>
<p>¿Donde te puedo llamar?</p>
<input type="text" required placeholder="Escribe tu telefono" id="contacto" class="field" name="casilla2"><br>
<p>Correo electronico</p>
<input type="email" class="field" name="casilla3" required placeholder="email@tuemail.com"><br>
<p>¿Que edad tenes?</p>
<input type="number" class="field" name="casilla4" id="edad" required placeholder="(1-99)"><br>
<p>¿Cuando naciste?</p>
<input type="date" class="field" name="casilla5" required><br>
<p>Sexo</p>
<select class="centrar" name="sex" class="field">
  <option value="1">Prefiero no especificar</option>
  <option value="2">No me identifico con ninguno</option>
  <option value="3">Mujer</option>
  <option value="4">Hombre</option>
</select><br>
<textarea name="areadetexto" class="field" cols="40" rows="1"
  placeholder="Contame, ¿que te intereso de mi postulación?"></textarea><br>
<textarea name="areadetexto" class="field" cols="40" rows="1"
  placeholder="¿Que debería mejorar de mi?"></textarea><br>
<textarea name="areadetexto" class="field" cols="40" rows="2"
  placeholder="¿Que me podrías recomendar para ser un buen dev a futuro?"></textarea><br>
<textarea name="areadetexto" class="field" cols="40" rows="2"
  placeholder="¿Cual es el mejor consejo que me podes dar como persona?"></textarea><br>
<p class="center-content">
  <input type="submit" class="btn btn-green" id="crear" onclick="crear()" value="Enviar">
  <input type="reset" class="btn btn-red" value="Borrar">
</p>
</form>
`
function crear() {
    let nombre = document.getElementById('nombre').value
    if (nombre.trim() == "") {
        alert("Completa tu nombre");
        return;
    }
    let contacto = document.getElementById('contacto').value
    if (contacto.trim() == "") {
        alert("Completa tu contacto");
        return;
    }
    else if (isNaN(contacto)) {
        alert("Solo se permiten numeros en contacto");
        return;
    }
    let edad = document.getElementById('edad').value
    if (edad.trim() == "") {
        alert("Completa tu edad correctamente");
        return;
    }
    else if (isNaN(edad)) {
        alert("Solo se permiten numeros en contacto");
        return;
    }
}    