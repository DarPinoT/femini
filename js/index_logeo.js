/**
 * Variables
 */
const signupButton = document.getElementById('signup-button'),
    loginButton = document.getElementById('login-button'),
    userForms = document.getElementById('user_options-forms')

/**
 * Add event listener to the "Sign Up" button
 */
signupButton.addEventListener('click', () => {
  userForms.classList.remove('bounceRight')
  userForms.classList.add('bounceLeft')
}, false)

/**
 * Add event listener to the "Login" button
 */
loginButton.addEventListener('click', () => {
  userForms.classList.remove('bounceLeft')
  userForms.classList.add('bounceRight')
}, false)


//function iniciarsesion() {
//    var mensaje = "Contraseña o usuario incorecta";
//    var boton = document.getElementById('boto');
//    var user = document.getElementById('usuario');
//    var contra = document.getElementById('contraseña');

//    if (user.value == "user" && contra.value == "user") {
//        location.href = "index.html";
//    } else {
//        alert(mensaje);
//    }
//}