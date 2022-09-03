const sign_inForm = document.querySelector('#sign_in')
const name_input=document.querySelector('#uName')
const surname_input=document.querySelector('#uSurname')
const email_input=document.querySelector('#mail')
const password_input=document.querySelector('#password')
const password_rpt_input=document.querySelector('#password_rpt')

sign_inForm.addEventListener('submit', handle_signIn)

function handle_signIn(evtn) {
   evtn.preventDefault();
   const name_inputValue = name_input.value
   const surname_inputValue = surname_input.value
   console.log(name_inputValue);
   const email_inputValue = email_input.value
   const password_inputValue = password_input.value;
   const loggedUser = {
      name: name_inputValue,
      surname: surname_inputValue,
      email: email_inputValue,
      password: password_inputValue
 }
   localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
   document.location.reload();
}

if (localStorage.getItem("loggedUser")) {
   const logInBtn = document.querySelector('.sign_in');
      if (logInBtn.classList.contains("btn-light")) {
      logInBtn.classList.remove("btn-light");
      logInBtn.classList.add("btn-success");
      logInBtn.classList.add("text-white");
      logInBtn.textContent = "Signed";
   }

}

