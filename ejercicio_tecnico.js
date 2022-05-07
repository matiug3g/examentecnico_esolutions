// Matias G. Soruco
// Ejercicio técnico ESolutions


let ejercicio = [
    {nombre: "Pedro", edad: 20, ciudad: "Cordoba"},
    {nombre: "Patricia", edad: 22, ciudad: "Cordoba"},
    {nombre: "José", edad: 23, ciudad: "Mendoza"},
    {nombre: "María", edad: 20, ciudad: "Cordoba"},
    {nombre: "Juan", edad: 20, ciudad: "Cordoba"},
    {nombre: "Ana", edad: 22, ciudad: "Cordoba"},
];

// Utilice metodo sort para ordenar primero por edad, luego por el nombre
// Si A < B, devolver -1, si A > B devolver 1
// Si la edad no es ni mayor ni menor (es igual) entonces lo que hacemos es compArar el nombre de las personas alfabeticamente
ejercicio.sort( (a, b) => {
    if(a.edad < b.edad) {
      return -1;
    }
    if(a.edad > b.edad) {
      return 1;
    }
    if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
      return -1;
    }
    if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
      return 1;
    }
    return 0;
  });

// Creamos el array donde van a estar las personas que cumplan con ciertas condiciones
var newArray = [];

ejercicio.forEach(object =>{

    var nombre = object.nombre;
    var ciudad = object.ciudad;
// Si la persona es de Cordoba, se pushea al array
    if(ciudad === "Cordoba"){
         newArray.push(nombre);
    } 
});

// Devuelve el array ordenado por edad, y luego alfabeticamente
console.log(newArray);

