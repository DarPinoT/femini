// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAAEBgzj8G-FEaCgiz-Jxw_lXnv5XKLCTA",
    authDomain: "femeni-1fb06.firebaseapp.com",
    databaseURL: "https://femeni-1fb06.firebaseio.com",
    projectId: "femeni-1fb06",
    storageBucket: "femeni-1fb06.appspot.com",
    messagingSenderId: "296198471557",
    appId: "1:296198471557:web:fa636b8ec8e4487b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

//----------VARIABLES PERFIL------------
var Nom_p = document.getElementById('nombre');
var Corr_p = document.getElementById('correo');
var Contra_p = document.getElementById('contraseña');
var direc_p = document.getElementById('direccion');
var ident_p = document.getElementById('identificacion');
var tel_p = document.getElementById('telefono');
//---------------------------------------------
function leerperfil() {

    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().Nombre}`);
            Nom.value = doc.data().Nombre;
            //Nom.value = doc.data().Nombre;
            //Corr.value = doc.data().Email;
            //Contra.value = doc.data().Contraseña;
            //direc.value = doc.data().Direcion;
            //ident.value = doc.data().Identificacion;
            //tel.value = doc.data().telefono;
        });
    });
}