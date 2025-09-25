 // header scroll position
const header = document.querySelector("header");
document.addEventListener("scroll", (e)=>{
    const scrolledPage = window.pageYOffset;
    const header = document.querySelector("header");
    const headerFixed = document.querySelector("header.fixed");
    let deviceHeight = 420;   
    deviceHeight = (window.innerHeight - 510);
    if(scrolledPage >= deviceHeight){
        if(headerFixed !== null){
          return ;
        }
        else{
          header.classList.add("fixed")
        }
    }
    else{
     if(headerFixed !== null){
          headerFixed.classList.remove("fixed");
     }
    }
})