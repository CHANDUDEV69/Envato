         const animateSVG = (i) =>{
                const circleWidth = Math.ceil(Math.random() * 150);
                const circle = document.querySelector("#circle");
                circle.setAttribute("r", circleWidth + 500);
                i += 0.03;
            }
            window.addEventListener("DOMContentLoaded", ()=>{
            let i = 0;
            setInterval(()=>{
                animateSVG();
            }, 2100)
        })