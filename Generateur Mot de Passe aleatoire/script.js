const passwordInput = document.querySelector("password-box .n");
copyIcon = document.querySelector("password-box .copy-icon");
rangeInput = document.querySelector('.range-box input');
sliderNumber = document.querySelector(".slider-number");
generateButton = document.querySelector('.generate-button');


rangeInput.addEventListener("click", () =>{
    sliderNumber.innerText = rangeInput.value;
}
);















