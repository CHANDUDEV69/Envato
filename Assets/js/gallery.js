const Dialog = document.querySelector("#galleryModal");
const galleryTabs = document.querySelectorAll(".galleryTabs .tab");
const galleryTabClass = document.querySelector(".galleryTabs");

// Gallery ImageViewer Dialog
let activeImageIndex = 0;
galleryTabs.forEach((galleryTab)=>{
     galleryTab.addEventListener("click", (elem)=>{
          galleryTabClass.classList.remove("active")
          galleryTabs.forEach((galleryTab)=>{
               galleryTab.classList.remove("active");
          })
          elem.target.classList.add("active");
          galleryTabClass.classList.add("active");
          
     })
})

// gallery  imageSlidingHandler
function imageSlidingHandler(){
     document.querySelector(".galleryStage").style.transform = `translateX( ${-100 * (activeImageIndex)}%)`;
}

// gallery prev and next controllers
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const modalClose = document.querySelector(".modalClose");

prevButton.addEventListener("click", ()=>{
          if(activeImageIndex > 0){
          activeImageIndex -= 1;
          imageSlidingHandler();
     }
})
nextButton.addEventListener("click", ()=>{
     if(activeImageIndex < 11){
          activeImageIndex += 1;
          imageSlidingHandler();
     }
});
// modal close button
modalClose.addEventListener("click", ()=>{
     Dialog.close();
});

// gallery image hover effect
const galleryViewer = document.querySelector(".galleryViewer");
const galleryImgs = document.querySelectorAll(".galleryImg");
const totalImgs = document.querySelectorAll(".galleryImg .galThumb");
totalImgs.forEach((galleryImg)=>{
     const img = new Image();
     urlCln = new URL(galleryImg.src).pathname;
     img.src = urlCln;
     img.classList.add("modalImg")
     document.querySelector(".galleryStage").appendChild(img)
});
function hoverEffect(){
          // All img elements iteration 
          galleryImgs.forEach((galleryImg)=>{
               galleryImgs.forEach((galleryImg)=>{
                    galleryImg.classList.remove("active");
          });
          // hover event
          galleryImg.addEventListener("mouseover", ((ele)=>{
               galleryImgs.forEach((galleryImg)=>{
                    galleryImg.classList.remove("active");
               });
               ele.target.classList.add("active");
          }));
          // click event
          galleryImg.addEventListener("click", ((ele)=>{
               activeImageIndex = eval(ele.target.childNodes[1].getAttribute("data-target"));
               imageSlidingHandler(activeImageIndex);
               Dialog.showModal();
          }));
     });
}
hoverEffect();
galleryViewer.addEventListener("mouseout", ()=>{
     hoverEffect();
});
