const count=document.querySelector(".count");
const input=document.querySelector("input");

input.addEventListener("keyup",()=> {
    count.innerHTML = input.value.length;
});

//keyup is event is fired when a key is released