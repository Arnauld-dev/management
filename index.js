  
  
const container=document.querySelector(".container");
const menu=document.querySelectorAll(".menu");
const tab_content=document.querySelectorAll(".tab-content");

container.addEventListener("click",function(e){
    const id=e.target.dataset.id;
    if(id){
        menu.forEach(function(btn){
            btn.classList.remove("active");
        })
        e.target.classList.add("active");

        tab_content.forEach(function(content){
            content.classList.remove("active");
        })

        const element=document.getElementById(id);
        element.classList.add("active");
    }

})