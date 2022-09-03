const accordionBtns = document.querySelectorAll('#accordToggle')
accordionBtns.forEach((accordionBtn => accordionBtn.addEventListener('click', onClickToAccordBtn, false)))

function onClickToAccordBtn(evt) {
    const parentNodeAccord = evt.target.closest('.accordion-item') 
    const accordMenu = parentNodeAccord.querySelector(".accordion-collapse")
    hideAllAccord(evt.target)
    accordMenu.classList.toggle('d-block');
}

function hideAllAccord(currentNode) {
    accordionBtns.forEach((accordionBtn => {
        if (accordionBtn !== currentNode){
            const parentNodeAccord = accordionBtn.closest('.accordion-item')
            const accordMenuu = parentNodeAccord.querySelector(".accordion-collapse")
            accordMenuu.classList.remove('d-block')
        }
    }))
}
