function toggleMenu()
{
    const menu= document.querySelector(".menu-linksm");
    const icon= document.querySelector(".hamburger-icon");
    const cross=document.querySelector(".crossmark");

    menu.classList.toggle("open");
    icon.classList.toggle("open");

    if(icon){
        icon.addEventListener('click',()=>{
            menu.classList.add('open')
            
        })
    }
   
}



