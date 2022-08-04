var firebaseConfig = {
    apiKey: "AIzaSyDbQg4FcK_Ss72DJVsJp191uukg67Y7iEU",
    authDomain: "prueba-xepelin-login.firebaseapp.com",
    databaseURL: "https://prueba-xepelin-login-default-rtdb.firebaseio.com",
    projectId: "prueba-xepelin-login",
    storageBucket: "prueba-xepelin-login.appspot.com",
    messagingSenderId: "293988840976",
    appId: "1:293988840976:web:80a92485ac915d81ddfc95"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()
  
  // Set up our register function
  function register () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    // Validar inputs
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Error en el correo o la contraseña')
      return
      // detener el code
    }
   
   
    // Avanzar con auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declarar var usuario
      var user = auth.currentUser
  
      // Agregar usuario a base de datos
      var database_ref = database.ref()
  
      // Crear data de usuario
      var user_data = {
        email : email,
        last_login : Date.now()
      }
  
      // Push al firebase database
      database_ref.child('users/' + user.uid).set(user_data)
  
      // usuario creado
      alert('Usuario creado, ahora inicia sesión!')
    })
    .catch(function(error) {
      // Firebase avisa en caso de algún error
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  // Declarar la funcion de login
  function login () {
    // leer inputs
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    // validar inputs
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Hay un error en el Email o la Contraseña!')
      return
      // parar el codigo
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declarar var usuario
      var user = auth.currentUser
  
      // Añadir usuario a database
      var database_ref = database.ref()
  
      // Crear data usuario
      var user_data = {
        last_login : Date.now()
      }
  
      // Push a base de datos
      database_ref.child('users/' + user.uid).update(user_data)
  
      // sesion iniciada
      alert('Usuario ha iniciado sesión');
      window.location.href = "/dashboard.html";
      if(user) {
        window.location = 'dashboard.html'; //Usuario es dirigido al dashboard
      }
  
    })
    .catch(function(error) {
      // Firebase avisa en caso de error
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  
  
  
  // Validar Funciones
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email es correcto
      return true
    } else {
      // Email no es correcto
      return false
    }
  }
  
  function validate_password(password) {
    // firebase solo acepta contraseñas de mas de 6 caracteres
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  } 