function login() {
    var username = document.getElementsByName("name")[0].value;
    var password = document.getElementsByName("password")[0].value;
  
    // Verificar usuario y contraseña
    if (username === "admin123" && password === "12345") {
      alert("Acceso concedido");
      // Redirigir a la página deseada
      window.location.href = "/pages/inicio.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }
  