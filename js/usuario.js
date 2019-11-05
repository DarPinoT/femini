window.onload = todos;

console.log("dsdfds");

var formAutentificacion;
function ininicializar() {
    //formAutentificacion = document.getElementById("onclick");
    formAutentificacion.addEventListener("submit", iniciarsesion, false);
}


function iniciarsesion(event) {
    event.preventDefault();
    var mensaje = "Contraseña o usuario incorecta";
    var boton = document.getElementById('boto');
    var user = document.getElementById('usuario');
    var contra = document.getElementById('contraseña');

    //if(user.value == "user" && contra.value == "user"){
    //    location.href = "../index.html";
    //} else {
    //    alert(mensaje);
    //}

    firebase.auth().signInWithEmailAndPassword(user, contra)
        .then(function(result) {
        alert("Correcta");
        })
        .catch(function (error) {
        alert("No se pudo");
        //// Handle Errors here.
        //var errorCode = error.code;
        //var errorMessage = error.message;
        //// ...
        });

}
