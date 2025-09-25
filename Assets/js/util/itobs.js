// All Sections Intersection Observer
const interSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("IS");
      interSectionObserver.unobserve(entry.target); 
    }
  });
},{threshold: 0.1});

const sections = document.querySelectorAll('section');
sections.forEach((section)=>{
     interSectionObserver.observe(section);
})

// counters intersection observer
const countersIntObserver = new IntersectionObserver((entries)=>{
     entries.forEach((entry)=>{
          if(entry.isIntersecting){
               const counters = document.querySelectorAll(".counter");
               counters.forEach((counter)=>{
                    const target = parseInt(counter.getAttribute("data-target"), 10);
                    let i = 0;
                    function updateCounter(){
                         if(i <= target){
                              counter.innerText = i;
                              i++;
                              setTimeout(updateCounter, Math.max(2000 / target));
                         }
                    }
                    updateCounter();
               })
               countersIntObserver.unobserve(aboutCounters);
          }
     })
})
const aboutCounters = document.querySelector(".aboutCounters");
countersIntObserver.observe(aboutCounters);
