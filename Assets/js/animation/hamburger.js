        // hamburger menu toggle handler
        const hamburger = document.querySelector(".ham-burger");
        hamburger.addEventListener("click", ()=>{
            document.querySelector(".mobile").classList.toggle("hidden");
            document.querySelector(".ham-burger").classList.toggle("active");
        })