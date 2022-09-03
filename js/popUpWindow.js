const signupBtn = document.querySelector('#svgg')
const emailInput = document.querySelector('#mail2')
signupBtn.addEventListener('click', handleSignup)

function handleSignup(evt) {
  evt.preventDefault();
  const emailInputValue = emailInput.value
  const loggedEmail = {
    email: emailInputValue
  }

  localStorage.setItem("loggedEmail", JSON.stringify(loggedEmail));
  document.location.reload()
   
}

if (localStorage.getItem("loggedEmail")) {
    var popup = document.getElementById("myPopup")
    popup.classList.toggle("show")
   setTimeout(()=> popup.classList.toggle("show"), 3000)

}
