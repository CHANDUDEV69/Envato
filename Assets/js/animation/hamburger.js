        // hamburger menu toggle handler
        const hamburger = document.querySelector(".ham-burger");
        hamburger.addEventListener("click", ()=>{
            document.querySelector(".mobile").classList.toggle("hidden");
            document.querySelector(".ham-burger").classList.toggle("active");
        })
        // hide when clicking on a mobile navlinks
        const mobileNavLinks = document.querySelectorAll(".mobile li");
        mobileNavLinks.forEach((mobileNavLink)=>{
            mobileNavLink.addEventListener("click", ()=>{
            document.querySelector(".mobile").classList.toggle("hidden");
            document.querySelector(".ham-burger").classList.toggle("active");
            })
        })
