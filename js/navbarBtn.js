const navbarBtn = document.querySelector('#toggle')
navbarBtn.addEventListener("click", onNavbarBtnClick, false)

function onNavbarBtnClick(event) {
   const parentNode = event.target.closest('.parent')
   const navlinkMenu = parentNode.querySelector('.collapse')
   navlinkMenu.classList.toggle('d-block');
}
