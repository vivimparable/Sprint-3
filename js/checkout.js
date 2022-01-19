// Get the input fields

var form= document.getElementById("formulario");
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var nameUser = document.querySelector('.name');
var lastName = document.querySelector('.lastName');
var email = document.querySelector('.email');
var address = document.querySelector('.address');
// Get the error elements
var errorPasswords = document.getElementById("errorPasswords");
var errorName = document.getElementById('errorNames');  
var errorLastName = document.getElementById('errorLastNames');  
var errorPhones = document.getElementById('errorPhones');  
var errorEmail = document.getElementById('errorEmail');  
var errorAddress = document.getElementById('errorAddress');  

// Exercise 8
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    form.classList.remove('is-invalid');
    var acumulador = 0;
//NAME
        if(nameUser.value.length==0){
            nameUser.classList.add("is-invalid");
            document.getElementById("errorNames").textContent = "Campo obligatorio";           
            acumulador++;
            
        }else if(nameUser.value.length<3){
            acumulador++;
            nameUser.classList.add("is-invalid");
            document.getElementById("errorNames").textContent = "Más de 3 carácteres.";

        }else if(!validar_letras(nameUser.value)){
            acumulador++;
            nameUser.classList.add("is-invalid");
            document.getElementById("errorNames").textContent = "No pueden haber números";
            
        }
//LAST NAME

        if(lastName.value.length==0){
            lastName.classList.add("is-invalid");
            document.getElementById("errorLastNames").textContent = "Campo obligatorio";            
            acumulador++;
        }else if(lastName.value.length<3){
            acumulador++;
            lastName.classList.add("is-invalid");
            document.getElementById("errorLastNames").textContent = "Más de 3 carácteres.";
            
        }else if(!validar_letras(lastName.value)){
            acumulador++;
            lastName.classList.add("is-invalid");
            document.getElementById("errorLastNames").textContent = "No pueden haber numeros";
        }
     
//EMAIL
      if(email.value.length==0){
        email.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Campo obligatorio";
        acumulador++;
        
      }else if(!validar_email(email.value)){
        email.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "No es el formato correcto";
        acumulador++;  
      }
//PHONE
      if(phone.value.length==0){
        phone.classList.add("is-invalid");
        document.getElementById("errorPhones").textContent = "Rellene el campo";

      
      }else if(phone.value.length<3){
        phone.classList.add("is-invalid");
        document.getElementById("errorPhones").textContent = "Pon más de 3 carácteres."; 
        acumulador++;
      }else if(!validar_numeros(phone.value)){
        phone.classList.add("is-invalid");
        document.getElementById("errorPhones").textContent = "Deben contener solo números."; 
        acumulador++;
      }


//PASSWORD


if(password.value.length==0){
    password.classList.add("is-invalid");
    document.getElementById("errorPasswords").textContent = "Rellene el campo";
    acumulador++;
  
  }else if(password.value.length<3){
    password.classList.add("is-invalid");
    document.getElementById("errorPasswords").textContent = "Pon más de 3 carácteres."; 
    acumulador++;

  }else if(!validar_numYLetras(password.value)){
    password.classList.add("is-invalid");
    document.getElementById("errorPasswords").textContent = "Debe contener números y letras."; 
    acumulador++;
  }
  

//ADDRESS

if(address.value.length==0){
    address.classList.add("is-invalid");
    document.getElementById("errorAddress").textContent = "Rellene el campo";
    acumulador++;
  
  }else if(address.value.length<3){
    address.classList.add("is-invalid");
    document.getElementById("errorAddress").textContent = "Pon más de 3 carácteres."; 
    acumulador++;
  }



      if(acumulador>0){
          return false;

      }else{
          return true;
      }
      
    
}

form.addEventListener('submit', (event) => {
	event.preventDefault();
});

form.addEventListener('blur', (event) => {
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

function validar_letras(name_lastName) {
	var regex2 = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
	return regex2.test(name_lastName) ? true : false;
}

function validar_numeros(password) {
	var regex3 = /^[0-9]*$/;
	return regex3.test(password) ? true : false;
}

function validar_numYLetras(numYLetras) {
	var regex4 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,40}$/;
	return regex4.test(numYLetras) ? true : false;
}
