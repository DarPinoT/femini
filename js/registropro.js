//--------------------------------------------------------
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

//-----------VARIABLES------------------------------------
var a = document.getElementById('asdf');

var img = document.getElementById('imagenProducto');
var img2 = document.getElementById('imagenProducto2');
var img3 = document.getElementById('imagenProducto3');
var nom = document.getElementById('name');
var referencia = document.getElementById('codigo');
var provedor = document.getElementById('numero');
var descrip = document.getElementById('descripcion');
var prec = document.getElementById('precio');
//var boto = document.getElementById('add_row');
//--------------------------------------------------------

function dsd() {
    console.log('addasdasda');
    console.log(img2.value);
    //    db.collection("Productos").add({
    //        imagen_1: img.value,
    //        imagen_2: img2.value,
    //        imagen_3: img3.value,
    //        nombre_producto: nom.value,
    //        referencia: referencia.value,
    //        nombre_provedor: provedor.value,
    //        descripcion: descrip.value,
    //        precio: prec.value
    //    })
    //        .then(function (docRef) {
    //            console.log("Registro exitoso ", docRef.id);
    //        })
    //        .catch(function (error) {
    //            console.error("No registrado: ", error);
    //        });
}

//--------------------------------------------------------