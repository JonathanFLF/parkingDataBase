const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // previene que el formulario se envíe automáticamente

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const userType = document.getElementById('user-type').value;

  console.log('Nombre de usuario: ' + username);
  console.log('Contraseña: ' + password);
  console.log('Tipo de usuario: ' + userType);

  // Aquí puedes enviar los datos a un servidor para procesarlos y validarlos

  


});
