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

//-----------VARIABLES PRODUCTO-----------------------------------
var img = document.getElementById('imagenProducto');
var img2 = document.getElementById('imagenProducto2');
var img3 = document.getElementById('imagenProducto3');
var nom = document.getElementById('name');
var referencia = document.getElementById('codigo');
var provedor = document.getElementById('numero');
var descrip = document.getElementById('descripcion');
var prec = document.getElementById('precio');


var contenido = document.getElementById('contenido');
//contenido.innerHTML = `

//          <div  class ="right-top-bar flex-w h-full">
//                <a id="Useree" onmousemove="ver()" href="#" class ="flex-c-m trans-04 p-lr-25">email</a>
//                <!-- <button type="button" onclick="ver()"  class ="flex-c-m trans-04 p-lr-25" style="color: white;">alsda</button> -->
//                <!-- <a href="logeo.html" class ="flex-c-m trans-04 p-lr-25">Salir</a> -->
//                <button type="button" onclick="salir()"  class ="flex-c-m trans-04 p-lr-25" style="color: white;">Salir</button>
//          </div>
//          `;


window.onload = function mostrarproducto() {
    db.collection("Productos").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            //Nom.value = doc.data().Nombre;
            //Corr.value = doc.data().Email;
            //Contra.value = doc.data().Contraseña;
            //direc.value = doc.data().Direcion;
            //ident.value = doc.data().Identificacion;
            //tel.value = doc.data().telefono;
        });
    });

    //var contenido = document.getElementById('cargaproducto');
    //contenido.innerHTML = `

    //      <div  class ="right-top-bar flex-w h-full">
    //            <a id="Useree" onmousemove="ver()" href="#" class ="flex-c-m trans-04 p-lr-25">email</a>
    //            <!-- <button type="button" onclick="ver()"  class ="flex-c-m trans-04 p-lr-25" style="color: white;">alsda</button> -->
    //            <!-- <a href="logeo.html" class ="flex-c-m trans-04 p-lr-25">Salir</a> -->
    //            <button type="button" onclick="salir()"  class ="flex-c-m trans-04 p-lr-25" style="color: white;">Salir</button>
    //      </div>
    //      `;

    
}

function iniciar() {
    var paso;
    for (paso = 0; paso < 5; paso++) {
        // Se ejecuta 5 veces, con valores desde paso desde 0 hasta 4.
        console.log('Dando un paso al Este');
    };
}