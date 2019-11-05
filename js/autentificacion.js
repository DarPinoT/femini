
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

//--------BOTONES------------
  var boton = document.getElementById('boto');
  var boton = document.getElementById('boto2');
//---------------------------

//-------VARIABLES SESION-------------
  var user = document.getElementById('usuario');
  var contra = document.getElementById('contraseña')
//-------VARIABLES REGISTRO-----------
  var Nom = document.getElementById('Nombre2');
  var Corr = document.getElementById('Correo2');
  var Contra = document.getElementById('contraseña2');
  var direc = document.getElementById('direcio2');
  var ident = document.getElementById('identificacion2');
  var tel = document.getElementById('telefono2');
//------------------------------------

  var usuario;

  var sesio = false;
 firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
          console.log('-----------Existe usuario');
          sesio = true;
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          console.log('------------------');
          //console.log(uid);
          usuario = uid;
          //apareceAdmin();
          // ...
      } else {
          console.log('------------------');
          console.log('No existen usuario');
          console.log('------------------');
          sesio = false;
          // User is signed out.
          // ...
      }
     leer();
      //loginApp();
  });

//---------------------------------------------------

  function Registrar() {
     
      firebase.auth().createUserWithEmailAndPassword(Corr.value, Contra.value)
        .then(function () {
            RegistroUsuario();
            console.log("Registrado");
            
        }).catch(function (error) {
                alert("Error");
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
            // ...
        });
      
  }

  function loginApp() {
      firebase.auth().signInWithEmailAndPassword(user.value, contra.value)
          .then(function () {

              var user = firebase.auth().currentUser;
              var uid;

              if (user != null) {
                  uid = user.uid;
              }
              //console.log(uid);
              //if (uid = '7lVA1YLz07UBOakAdqONb435AMf1' | uid = 'pXVxq2f6bqhR9jI7gJ2YspRFUt12') {
              if (uid == '7lVA1YLz07UBOakAdqONb435AMf1' | uid == 'TqnmXwAqzogs4R40x9y5rFd88Xx1') {
                  console.log("Hola");
                  //aparece();
                  location.href = "TiendaAdmin.html";
              } else {
                  console.log("Usuario validado");
                  location.href = "../index.html";
              }
              
              //alert("Usuario validado")
          })
          .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
         
      });
  }

  function RegistroUsuario() {
      
      db.collection("users").add({
          Nombre: Nom.value,
          Email: Corr.value,
          Contraseña: Contra.value,
          Direcion: direc.value,
          Identificacion: ident.value,
          telefono: tel.value
      })
          .then(function (docRef) {
              console.log("Registro exitoso ", docRef.id);
              location.href = "../index.html";
          })
          .catch(function (error) {
              console.error("No registrado: ", error);
          });
  }

  function salir() {
      firebase.auth().signOut().then(function () {
          console.log('salio');
          location.href = "../index.html";
          // Sign-out successful.
      }).catch(function (error) {
          location.reload();
          // An error happened.
      });
  }

  function salirindex() {
      firebase.auth().signOut().then(function () {
          console.log('salio');
          //location.href = "App/logeo.html";
          location.reload();
          // Sign-out successful.
      }).catch(function (error) {
          location.reload();
          // An error happened.
      });
  }

  function si() {
      firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
              console.log('asdasda');
              sesio = true;
          } else {
              sesio = false;
              // No user is signed in.
          }
      });
  }
 
  function apareceAdmin() {


          var contenido = document.getElementById('contenido');
          contenido.innerHTML = `

          <div  class ="right-top-bar flex-w h-full">
                <a id="Useree" onmousemove="ver()" href="#" class ="flex-c-m trans-04 p-lr-25">email</a>
                <!-- <button type="button" onclick="ver()"  class ="flex-c-m trans-04 p-lr-25" style="color: white;">alsda</button> -->
                <!-- <a href="logeo.html" class ="flex-c-m trans-04 p-lr-25">Salir</a> -->
                <button type="button" onclick="salir()"  class ="flex-c-m trans-04 p-lr-25" style="color: white;">Salir</button>
          </div>
          `;
      
  }


  //----------VARIABLES PERFIL------------
  var Nom_p = document.getElementById('nombre');
  var Corr_p = document.getElementById('correo');
  var Contra_p = document.getElementById('contraseña');
  var direc_p = document.getElementById('direccion');
  var ident_p = document.getElementById('identificacion');
  var tel_p = document.getElementById('telefono');
  //---------------------------------------------
  function leer() {
      var user_p = firebase.auth().currentUser;
      var email_p;
      if (user_p != null) {
          email_p = user_p.email;
      }
      db.collection("users").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              //console.log(`${doc.id} => ${doc.data().Nombre}`);
              if(email_p == doc.data().Email){
                  Nom_p.value = doc.data().Nombre;
                  Corr_p.value = doc.data().Email;
                  Contra_p.value = doc.data().Contraseña;
                  direc_p.value = doc.data().Direcion;
                  ident_p.value = doc.data().Identificacion;
                  tel_p.value = doc.data().telefono;
              }
              
          });
      });
      console.log('dsadada');
  }


  //-----------VARIABLES PRODUCTO-----------------------------------
  var img = document.getElementById('imagenProducto');
  var img2 = document.getElementById('imagenProducto2');
  var img3 = document.getElementById('imagenProducto3');
  var nom = document.getElementById('name');
  var referencia = document.getElementById('codigo');
  var provedor = document.getElementById('numero');
  var descrip = document.getElementById('descripcion');
  var prec = document.getElementById('precio');
  var tip = document.getElementById('tipo');
  //var boto = document.getElementById('add_row');
  //--------------------------------------------------------

  function registrarproducto() {
          db.collection("Productos").add({
              imagen_1: img.value,
              imagen_2: img2.value,
              imagen_3: img3.value,
              nombre_producto: nom.value,
              referencia: referencia.value,
              nombre_provedor: provedor.value,
              descripcion: descrip.value,
              tipo: tip.value,
              precio: prec.value
          })
              .then(function (docRef) {
                  console.log("Registro exitoso ", docRef.id);
                  location.href = "TiendaAdmin.html";
              })
              .catch(function (error) {
                  console.error("No registrado: ", error);
              });
  }
  
  function mostrarzapatos() {
      var tabla = document.getElementById('productos');
      var tabla2 = document.getElementById('toto');
      var a = 0;
      db.collection("Productos").onSnapshot((querySnapshot) => {
          tabla.innerHTML = '';
          querySnapshot.forEach((doc) => {
              a++;
              if('zapatos'==doc.data().tipo){
                  tabla.innerHTML += `
                  <!--<div class ="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${doc.data().tipo}">-->
                  <div class ="block2 col-md-3 ">
                        <div class ="block2-pic hov-img0">
                            <img src="${doc.data().imagen_1}" alt="IMG-PRODUCT">

                            <button class ="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04" onclick="visualizar('${doc.id}')">
                                Visualizar
                            </button>
                        </div>

                        <div class ="block2-txt flex-w flex-t p-t-14">
                            <div class ="block2-txt-child1 flex-col-l ">
                                <a href="product-detail.html" class ="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                    ${doc.data().nombre_producto}
                                </a>

                                <span class ="stext-105 cl3">
                                    ${doc.data().precio}
                                </span>
                            </div>
                        </div>
                    <!--</div>-->
                  </div>`
              }
              
          });
      });
  }

  function mostrarbolsos() {
      var tabla = document.getElementById('productos');
      var tabla2 = document.getElementById('toto');
      var a = 0;
      db.collection("Productos").onSnapshot((querySnapshot) => {
          tabla.innerHTML = '';
          querySnapshot.forEach((doc) => {
              a++;
              if ('bolso' == doc.data().tipo) {
                  tabla.innerHTML += `
                  <!--<div class ="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${doc.data().tipo}">-->
                  <div class ="block2 col-md-3 ">
                        <div class ="block2-pic hov-img0">
                            <img src="${doc.data().imagen_1}" alt="IMG-PRODUCT">

                            <button class ="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04" onclick="visualizar('${doc.id}')">
                                Visualizar
                            </button>
                        </div>

                        <div class ="block2-txt flex-w flex-t p-t-14">
                            <div class ="block2-txt-child1 flex-col-l ">
                                <a href="product-detail.html" class ="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                    ${doc.data().nombre_producto}
                                </a>

                                <span class ="stext-105 cl3">
                                    ${doc.data().precio}
                                </span>
                            </div>

                        </div>
                    <!--</div>-->
                  </div>`
              }

          });
      });
  }

  function mostrarproductos() {
      var tabla = document.getElementById('productos');
      var a = 0;
      db.collection("Productos").onSnapshot((querySnapshot) => {
          tabla.innerHTML = '';
          querySnapshot.forEach((doc) => {
              a++;
              tabla.innerHTML += `
                  <!--<div class ="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${doc.data().tipo}">-->
                  <div class ="block2 col-md-3 ">
                        <div class ="block2-pic hov-img0">
                            <img src="${doc.data().imagen_1}" alt="IMG-PRODUCT">

                            <button class ="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04" onclick="visualizar('${doc.id}')">
                                Visualizar
                            </button>
                        </div>

                        <div class ="block2-txt flex-w flex-t p-t-14">
                            <div class ="block2-txt-child1 flex-col-l ">
                                <a href="product-detail.html" class ="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                    ${doc.data().nombre_producto}
                                </a>

                                <span class ="stext-105 cl3">
                                    ${doc.data().precio}
                                </span>
                            </div>
                        </div>
                    <!--</div>-->
                  </div>`
          });
      });

  }

  function mostrarproductosindex() {
      var tabla = document.getElementById('productos');
      var tabla2 = document.getElementById('toto');
      var a = 0;
      db.collection("Productos").onSnapshot((querySnapshot) => {
          tabla.innerHTML = '';
          querySnapshot.forEach((doc) => {
              a++;
              if(a<5){
                  tabla.innerHTML += `
                  <!--<div class ="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${doc.data().tipo}">-->
                  <div class ="block2 col-md-3 ">
                        <div class ="block2-pic hov-img0">
                            <img src="${doc.data().imagen_1}" alt="IMG-PRODUCT">

                            <button class ="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04" onclick="visualizar('${doc.id}')">
                                Visualizar
                            </button>
                        </div>

                        <div class ="block2-txt flex-w flex-t p-t-14">
                            <div class ="block2-txt-child1 flex-col-l ">
                                <a href="product-detail.html" class ="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                    ${doc.data().nombre_producto}
                                </a>

                                <span class ="stext-105 cl3">
                                    ${doc.data().precio}
                                </span>
                            </div>
                        </div>
                    <!--</div>-->
                  </div>`
              }
              
          });
      });
      tabla2.innerHTML = `
          <a href="App/product.html" class ="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
                        Mostrar mas
                    </a>`
  }

  function mostrarproductoadmin() {
      var tabla = document.getElementById('Tablaproducto');
      db.collection("Productos").onSnapshot((querySnapshot) => {
          tabla.innerHTML = '';
          querySnapshot.forEach((doc) => {
              tabla.innerHTML += `
                  <tr>
                    <th scope="row">${doc.id}</th>
                    <td>${doc.data().referencia}</td>
                    <td><img src="${doc.data().imagen_1}" style="width: 50px; height: 50px;"></td>
                    <td>${doc.data().nombre_producto}</td>
                    <td>${doc.data().precio}</td>
                    <td>${doc.data().nombre_provedor}</td>
                    <td>${doc.data().descripcion}o</td>
                    <td><button class ="btn btn-danger" onclick="eliminarproductos('${doc.id}')">Eliminar</button></td>
                    <!--<td><button class ="btn btn-warning">Editar</button></td>-->
                  </tr>`
             // console.log(`${doc.id} => ${doc.data()}`);
          });
      });
  }

  function eliminarproductos(id) {
      db.collection("Productos").doc(id).delete().then(function () {
          console.log("Document successfully deleted!");
      }).catch(function (error) {
          console.error("Error removing document: ", error);
      }); test.firestore.js
  }

  function mostrarpro() {
      var tabla = document.getElementById('Tablaproductonueva');
      db.collection("Productos").onSnapshot((querySnapshot) => {
          tabla.innerHTML = '';
          querySnapshot.forEach((doc) => {
              tabla.innerHTML += `
                  <tr>
                    <td>
                    <div class ="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                <!--Block2-->
                <div class ="block2">
                    <div class ="block2-pic hov-img0">
                        <img src="${doc.data().imagen_1}" alt="IMG-PRODUCT">

                        <button class ="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04" onclick="visualizar('${doc.id}')">
                            Visualizar
                        </button>
                        <!--<a href="#"-->
                        <!--class ="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">Visualizar</a>-->
                    </div>

                    <div class ="block2-txt flex-w flex-t p-t-14">
                        <div class ="block2-txt-child1 flex-col-l ">
                            <a href="product-detail.html" class ="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                ${doc.data().nombre_producto}
                            </a>

                            <span class ="stext-105 cl3">
                                ${doc.data().precio}
                            </span>
                        </div>

                        <div class ="block2-txt-child2 flex-r p-t-3">
                            <a href="#" class ="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                <img class ="icon-heart1 dis-block trans-04" src="../images/icons/icon-heart-01.png"
                                     alt="ICON">
                                <img class ="icon-heart2 dis-block trans-04 ab-t-l"
                                     src="../images/icons/icon-heart-02.png" alt="ICON">
                            </a>
                        </div>
                    </div>
                </div>
            </div></td>
            <td><button class ="btn btn-info" onclick="registrar_carro('${doc.id}','${doc.data().nombre_producto}','${doc.data().precio}','${doc.data().imagen_1}')">Agregar</button></td>
                  </tr>`
          });
      });
  }

//-----------CARRO DE COMPRAS-----------------------------------
  function registrar_carro(id, nombre,precio,imagen) {
      var user = firebase.auth().currentUser;
      var uid, email;
      if (user != null) {
          uid = user.uid;
          email = user.email;
      }
      db.collection("Carrito").add({
          id_usuario: uid,
          Nombre_producto: nombre,
          Precio_producto: precio,
          Imagen: imagen,
          producto: id
      })
          .then(function (docRef) {
              console.log("Registro exitoso ", docRef.id);
          })
          .catch(function (error) {
              console.error("No registrado: ", error);
          });
  }

  function carrito() {
      var totalcarrpp = document.getElementById('toatlcarro');
      var totalcarrpp2 = document.getElementById('toatlcarro2');
      var integer=0;
      var totalprecio=0;
      var tabla2 = document.getElementById('Tablacarro');
      var id_usercarro;
      //db.collection("Carrito").onSnapshot((querySnapshot) => {
      db.collection("Carrito").onSnapshot((querySnapshot) => {
          totalprecio = 0;
          tabla2.innerHTML = '';
          var usere = firebase.auth().currentUser;
          var uidu;
          querySnapshot.forEach((doc) => {
              if (usere != null) {
                  uidu = usere.uid;
              }
              //console.log('Usuario');
              //console.log((String(usere.uid).trim()));
              //console.log('Carro');
              id_usercarro = doc.data().id_usuario;
              //console.log(String(id_usercarro).trim());
              //console.log('----------');
              if (String(usere.uid).trim() == String(id_usercarro).trim()) {
                  //console.log(doc.data().id_usuario);
                  //console.log(doc.id);
                  tabla2.innerHTML += `
                  <tr>
                    <td><img src="${doc.data().Imagen}" style="width: 100px; height: 100px;"></td>
                    <td>${doc.data().Nombre_producto}</td>
                    <td>${doc.data().Precio_producto}</td>
                    <td><button type="button" class ="btn btn-danger" onclick="eliminarproductocarito('${doc.id}')">Eliminar</button></td>
                  </tr>`
                  integer = parseInt(String(doc.data().Precio_producto).trim(), 10);
                  totalprecio += integer;
                  //console.log(String(doc.data().Precio_producto).trim());
                  
              }
              totalcarrpp.innerHTML = totalprecio;
              totalcarrpp2.innerHTML = totalprecio;
              console.log(totalprecio);
              // console.log(`${doc.id} => ${doc.data()}`);
          });
      });
  }

  function eliminarproductocarito(id) {
      //console.log('adafaff');
      db.collection("Carrito").doc(id).delete().then(function () {
          console.log("Document successfully deleted!");
      }).catch(function (error) {
          console.error("Error removing document: ", error);
      });
      //test.firestore.js
      //location.reload();
  }

  function vaciar() {
      var id_usercarro;
      db.collection("Carrito").onSnapshot((querySnapshot) => {
          //tabla2.innerHTML = '';
          var usere = firebase.auth().currentUser;
          var uidu;
          querySnapshot.forEach((doc) => {
              if (usere != null) {
                  uidu = usere.uid;
              }
              id_usercarro = doc.data().id_usuario;
              if (String(usere.uid).trim() == String(id_usercarro).trim()) {
                  //console.log(doc.id);
                  eliminarproductocarito(doc.id);
              }

          });
      });
  }

  function mostrarcarro() {
      var totalcarrpp = document.getElementById('totalcarroico');
      var tabla = document.getElementById('carrimagen');
      var totalprecio = 0;
      var integer;
      
      db.collection("Carrito").onSnapshot((querySnapshot) => {
          totalprecio = 0;
          tabla.innerHTML = '';
          var usere = firebase.auth().currentUser;
          var uidu;
          querySnapshot.forEach((doc) => {

              if (usere != null) {
                  uidu = usere.uid;
              }
              id_usercarro = doc.data().id_usuario;
              if (String(usere.uid).trim() == String(id_usercarro).trim()) {
                  console.log('----------');
                  tabla.innerHTML += `
                  <tr>
                    <td>
                    <li class ="header-cart-item flex-w flex-t m-b-12">
						<div class ="header-cart-item-img">
							<img src="${doc.data().Imagen}" alt="IMG">
						</div>

						<div class ="header-cart-item-txt p-t-8">
							<a href="#" class ="header-cart-item-name m-b-18 hov-cl1 trans-04">
								${doc.data().Nombre_producto}
							</a>

							<span class ="header-cart-item-info">
								${doc.data().Precio_producto}
							</span>
						</div>
					</li>
                    </td>
                  </tr>`
                  integer = parseInt(String(doc.data().Precio_producto).trim(), 10);
                  totalprecio += integer;
                  //console.log(String(doc.data().Precio_producto).trim());
                  totalcarrpp.innerHTML = 'Total: $ ' + totalprecio;
              }

          });
      });
  }

  function visualizar(id) {
      console.log('--------------ENTRO');
      document.getElementById('mostrar').style.display = "block";

      var tabla = document.getElementById('mostrar');
      console.log(id);
      db.collection("Productos").onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              if (id == doc.id) {
                  if ('zapatos' == doc.data().tipo) {
                      tabla.innerHTML = `
                      <div>
    <div class="container">
        <div class="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button class="how-pos3 hov3 trans-04 js-hide-modal1" onclick="novizualizar()">
                <img src="https://udlaedu-my.sharepoint.com/personal/da_pino_udla_edu_co/Documents/icon-close.png" alt="CLOSE">
            </button>

            <div class="row">
                <div class="col-md-6 col-lg-7 p-b-30">
                    <div class="p-l-25 p-r-30 p-lr-0-lg">
                        <div class="wrap-slick3 flex-sb flex-w">
                            <div class="wrap-slick3-dots">
                                <ul class="slick3-dots" role="tablist" style="">
                                    <li class ="" role="presentation" onclick="mmm('${doc.data().imagen_1}')">
                                        <img src="${doc.data().imagen_1}">
                                        <div class="slick3-dot-overlay"></div>
                                    </li>
                                    <li class ="" role="presentation" onclick="mmm('${doc.data().imagen_2}')">
                                        <img src="${doc.data().imagen_2}">
                                        <div class="slick3-dot-overlay"></div>
                                    </li>
                                    <li class ="" role="presentation" onclick="mmm('${doc.data().imagen_3}')">
                                        <img src="${doc.data().imagen_3}" ">
                                        <div class="slick3-dot-overlay"></div>
                                    </li>
                                </ul>
                            </div>

                            <div class="slick3 gallery-lb">
                                <div class="item-slick3"
                                     data-thumb="${doc.data().imagen_1}">
                                    <div class="wrap-pic-w pos-relative" >
                                        <img id="imagen" src="${doc.data().imagen_1}"
                                             alt="IMG-PRODUCT">

                                        <!--<a class ="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"-->
                                        <!--href="${doc.data().imagen_1}">-->
                                            <!--<i class ="fa fa-expand"></i>-->
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-5 p-b-30">
                    <div class="p-r-50 p-t-5 p-lr-0-lg">
                        <h4 class="mtext-105 cl2 js-name-detail p-b-14">
                            ${doc.data().nombre_producto}
                        </h4>

                        <span class="mtext-106 cl2">
                            ${doc.data().precio}
                        </span>

                        <p class="stext-102 cl3 p-t-23">
                            ${doc.data().descripcion}
                        </p>

                        <!--  -->
                        <div class="p-t-33">
                            <div class="flex-w flex-r-m p-b-10">
                                <div class="size-203 flex-c-m respon6">
                                    TALLA
                                </div>

                                <div class="size-204 respon6-next">
                                        <select class ="browser-default custom-select">
                                            <option>Elige tu talla</option>
                                            <option>34</option>
                                            <option>35</option>
                                            <option>36</option>
                                            <option>37</option>
                                            <option>38</option>
                                            <option>39</option>
                                            <option>40</option>
                                        </select>
                                </div>
                            </div>
                        </div>
                            <div class="flex-w flex-r-m p-b-10">
                                <div class="size-204 flex-w flex-m respon6-next">
                                    <br />
                                    <br />
                                    <br />
                                    <!-- <button class ="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail" onclick="registrar_carro('${doc.id}','${doc.data().nombre_producto}','${doc.data().precio}','${doc.data().imagen_1}') "> -->
                                    <!--<button class ="btn btn-info" onclick="registrar_carro('${doc.id}','${doc.data().nombre_producto}','${doc.data().precio}','${doc.data().imagen_1}')">asda</button>-->
                                    <button class ="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail" onclick="registrar_carro('${doc.id}','${doc.data().nombre_producto}','${doc.data().precio}','${doc.data().imagen_1}')">
                                        AÑADIR AL CARRO
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
                      `
                  } else {
                      tabla.innerHTML = `
                      <div>
    <div class="container">
        <div class="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button class="how-pos3 hov3 trans-04 js-hide-modal1" onclick="novizualizar()">
                <img src="https://udlaedu-my.sharepoint.com/personal/da_pino_udla_edu_co/Documents/icon-close.png" alt="CLOSE">
            </button>

            <div class="row">
                <div class="col-md-6 col-lg-7 p-b-30">
                    <div class="p-l-25 p-r-30 p-lr-0-lg">
                        <div class="wrap-slick3 flex-sb flex-w">
                            <div class="wrap-slick3-dots">
                                <ul class ="slick3-dots" role="tablist" style="">
                                    <li class ="" role="presentation" onclick="mmm('${doc.data().imagen_1}', '${doc.data().tipo}')">
                                        <img src="${doc.data().imagen_1}">
                                        <div class ="slick3-dot-overlay"></div>
                                    </li>
                                    <li class ="" role="presentation" onclick="mmm('${doc.data().imagen_2}', '${doc.data().tipo}')">
                                        <img src="${doc.data().imagen_2}">
                                        <div class ="slick3-dot-overlay"></div>
                                    </li>
                                    <li class ="" role="presentation" onclick="mmm('${doc.data().imagen_3}', '${doc.data().tipo}')">
                                        <img src="${doc.data().imagen_3}" ">
                                        <div class ="slick3-dot-overlay"></div>
                                    </li>
                                </ul>
                            </div>

                            <div class="slick3 gallery-lb">
                                <div class="item-slick3"
                                     data-thumb="${doc.data().imagen_1}">
                                    <div class="wrap-pic-w pos-relative" id="imagen">
                                        <img id="imagen2" src="${doc.data().imagen_1}"
                                             alt="IMG-PRODUCT">

                                        <!--<a class ="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"-->
                                        <!--href="${doc.data().imagen_1}">-->
                                            <!--<i class ="fa fa-expand"></i>-->
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-5 p-b-30">
                    <div class="p-r-50 p-t-5 p-lr-0-lg">
                        <h4 class="mtext-105 cl2 js-name-detail p-b-14">
                            ${doc.data().nombre_producto}
                        </h4>

                        <span class="mtext-106 cl2">
                            ${doc.data().precio}
                        </span>

                        <p class="stext-102 cl3 p-t-23">
                            ${doc.data().descripcion}
                        </p>

                        <!--  -->
                        
                            <div class="flex-w flex-r-m p-b-10">
                                <div class="size-204 flex-w flex-m respon6-next">
                                    <br />
                                    <br />
                                    <br />
                                    <!-- <button class ="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail" onclick="registrar_carro('${doc.id}','${doc.data().nombre_producto}','${doc.data().precio}','${doc.data().imagen_1}') "> -->
                                    <button class ="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail" onclick="registrar_carro('${doc.id}','${doc.data().nombre_producto}','${doc.data().precio}','${doc.data().imagen_1}')">
                                        AÑADIR AL CARRO
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
                      `
                  }
                 
              }

          });
      });
  }

  function novizualizar() {
      document.getElementById('mostrar').style.display = "none";
  }

  function mmm(numero, zap) {
      //console.log('--------------------- SI FUNCIONA');
      //var pinture = document.getElementById('imagen');
      //console.log(numero);
      //console.log(zap);
      //document.getElementById('imagen').src = '';
      if(zap=='bolso'){
          document.getElementById("imagen2").src = "" + numero + "";

      } else {
          document.getElementById("imagen").src = "" + numero + "";
      }
  }