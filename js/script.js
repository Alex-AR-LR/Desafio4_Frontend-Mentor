const $form = document.querySelector(".form");

$form.addEventListener("submit",e=>{
    e.preventDefault();

    /* validation of name*/
    validation(e,"name");

    /* validation of last name */
    validation(e,"last-name");

    /* validation of email */
    validation(e, "email");

    /* validation of pass */
    validation(e,"pass");
})

const validation = (e,inputName)=>{
    const $selector = e.target[inputName];

    if($selector.value.trim() === ""){
        $selector.parentElement.querySelector("p").classList.add("err-text-active");
        $selector.parentElement.querySelector("img").classList.add("err-icon-active");
        $selector.style.border = "2px solid var(--primary-red)";
    }else{
        $selector.parentElement.querySelector("p").classList.remove("err-text-active");
        $selector.parentElement.querySelector("img").classList.remove("err-icon-active");
        $selector.style.border = "2px solid var(--primary-green)";
    };
};

