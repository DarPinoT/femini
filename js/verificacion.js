
var sesio;

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var barra = document.getElementById('Barramenu');
        var contenido = document.getElementById('contenido');
        //--------------------------CREACION
        contenido.innerHTML = `
            <div  class ="right-top-bar flex-w h-full">
                <a id="Useree" onmousemove="ver()" href="#" class ="flex-c-m trans-04 p-lr-25">email</a>
                <!-- <button type="button" onclick="ver()"  class ="flex-c-m trans-04 p-lr-25" style="color: white;">alsda</button> -->
                <!-- <a href="logeo.html" class ="flex-c-m trans-04 p-lr-25">Salir</a> -->
                <button type="button" onclick="salir()"  class ="flex-c-m trans-04 p-lr-25" style="color: white;">Salir</button>
           </div>
    `;
        barra.innerHTML = `
            <div class ="menu-desktop">
                <ul class ="main-menu">
                    <li>
                        <a href="../index.html">Inicio</a>
                    </li>
                    <li >
                        <a href="product.html">Tienda</a>
                    </li>
                    <li >
                        <a href="shoping-cart.html">Mi carro</a>
                    </li>
                    <li>
                        <a href="contact.html">Contacto</a>
                    </li>
                    <li>
                        <a href="perfil.html">Mi Perfil</a>
                    </li>
                  </ul>
             </div>
         `;
        //console.log('asdasda');
        sesio = true;
    } else {
        var barra = document.getElementById('Barramenu');
        var contenido = document.getElementById('contenido');
        //--------------------------CREACION
        contenido.innerHTML = `
            <div class ="right-top-bar flex-w h-full">
                <a href="logeo.html" class ="flex-c-m trans-04 p-lr-25">
                    Iniciar sesión
  				</a>
            </div>
    `;
        barra.innerHTML = `
            <div class ="menu-desktop">
                <ul class ="main-menu">
                    <li>
                        <a href="../index.html">Inicio</a>
                    </li>
                    <li>
                        <a href="product.html">Tienda</a>
                    </li>
                    <li>
                        <a href="contact.html">Contacto</a>
                    </li>
                  </ul>
             </div>
         `;
        sesio = false;
    }
});