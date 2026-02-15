const addCounter = document.getElementById("counter-btn");
const template=document.getElementById("counter-template");
const container =document.querySelector(".counter-container");
addCounter.addEventListener("click",(e)=>{
    e.preventDefault();

    const counter = template.content.cloneNode(true);
    
    let text=counter.querySelector(".text");
    let incr=counter.querySelector(".increase");
    let decr=counter.querySelector(".decrease");
    
    incr.addEventListener("click",()=>{
        text.textContent=Number(text.textContent) + 1;
    });
    
    decr.addEventListener("click",()=>{
        text.textContent=Number(text.textContent) - 1;
    });

    
    container.appendChild(counter);
})