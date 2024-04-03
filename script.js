const bars = document.getElementById("bars");
const nav_bar = document.getElementById("nav_bar");
const nav_li = Array.from(document.getElementsByClassName("nav_li"));
const rocket = document.getElementById("rocket")
bars.addEventListener("click", () => {
  if (nav_bar.style.display == "none" ) {
    nav_bar.style.display = "flex";
    bars.classList.remove("fa-bars");
    bars.classList.add("fa-xmark");
  } else {

    nav_bar.style.display = "none";
    bars.classList.add("fa-bars");
    bars.classList.remove("fa-xmark");
  }
});
const updateActiveLink = ()=>{
  let scrollPosition = window.scrollY;
  console.log(scrollPosition)
  let sections  = document.querySelectorAll("section");

  sections.forEach((section)=>{
      let divPosition = section.offsetTop;
      if(divPosition <= scrollPosition){
        let id = section.getAttribute("id")
        document.querySelectorAll('#nav_bar li a').forEach((li)=>{
          li.parentNode.classList.remove("active")
        })
        document.querySelector('#nav_bar li a[href="#'+id + '"]').parentNode.classList.add("active")
      }
  })
}
updateActiveLink()
nav_li.forEach((lis) => {
  lis.addEventListener("click", (e) => {
    nav_li.forEach((li)=>{
      li.classList.remove("active");
      bars.classList.add("fa-xmark");
    bars.classList.remove("fa-bars");
    })
    e.target.classList.add("active")
    bars.classList.add("fa-xmark");
    bars.classList.remove("fa-bars");
  });
});
rocket.addEventListener('click',()=>{
  window.scrollTo(0,0)
})

document.addEventListener("scroll",()=>{
  updateActiveLink()
})

