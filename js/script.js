window.addEventListener("load", ()=>{
    let sliderOne = document.querySelector("ul.slider.active1");
    let sliderTwo = document.querySelector("ul.slider.active2");
    let sliderThree = document.querySelector("ul.slider.active3");
    let buttonOne = document.querySelector("button.one");
    let buttonTwo = document.querySelector("button.two");
    let buttonThree = document.querySelector("button.three");
    let buttons = document.querySelectorAll("button");
    let animate = document.querySelectorAll("ul.slider li");
    let menus = document.querySelectorAll("ul.menu li a");
    let sections =document.querySelectorAll("section");
    let backgroundOne = document.querySelector("div.intro");
    let backgroundTwo = document.querySelector("div.services");
    let backgroundThree = document.querySelector("div.about");
    let backgroundFour = document.querySelector("div.contact");
    let aboutSection =document.getElementById("about");
    let servicesSection = document.getElementById("services")
    buttonOne.addEventListener("click",function(){
            console.log("click");
            animate.forEach(anim => anim.classList.add("animate"));
            sliderOne.classList.remove("slider1");
        if(sliderTwo.classList.contains("slider2") || sliderThree.classList.contains("slider3")){
            sliderTwo.classList.remove("slider2");
            sliderThree.classList.remove("slider3")
        }
    })
    buttonTwo.addEventListener("click",()=>{
        console.log("click");
            animate.forEach(anim => anim.classList.add("animate"));
            sliderTwo.classList.add("slider2");
        if(sliderOne.classList.contains("active1") || sliderThree.classList.contains("slider3")){
            sliderOne.classList.add("slider1");
            sliderThree.classList.remove("slider3");
        }
    })
    buttonThree.addEventListener("click",()=>{
        console.log("click");
            animate.forEach(anim => anim.classList.add("animate"));
            sliderThree.classList.add("slider3");
        if(sliderOne.classList.contains("active1") || sliderTwo.classList.contains("slider2")){
            sliderOne.classList.add("slider1");
            sliderTwo.classList.remove("slider2");
        }
    })
    buttons.forEach(button => {
        button.addEventListener("click",function(){
            console.log("click");
            buttons.forEach(btn => btn.classList.remove("active"))
            this.classList.add("active");
        })
        
    });
    window.addEventListener("scroll",function(){
        let current = "";
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollY >= sectionTop - sectionHeight/3.5){
            current = section.getAttribute("id");
          }
        })
        menus.forEach((element)=>{
            element.classList.remove("active");
            if(element.classList.contains(current)){
                element.classList.add("active");
            }
        })
    })
    menus.forEach((menu)=>{
        menu.addEventListener("click",function(){
            menus.forEach(men=>men.classList.remove("active"))
            this.classList.add("active")
        })
    })
    
    window.addEventListener("scroll",function(){
        let value =window.scrollY;
        console.log(value);
        backgroundOne.style.backgroundPositionY= "-" + value * 0.2 + "px";
        backgroundTwo.style.backgroundPositionY= "-" + value * 0.2 + "px";
        let aboutValue = window.scrollY - aboutSection.offsetTop;
        backgroundThree.style.backgroundPositionY= "-" + aboutValue * 0.3 + "px";
        backgroundFour.style.backgroundPositionY= "-" + aboutValue * 0.2+ "px";
    })
    let menuIcon = document.querySelector("ul.menu-icon");
    let menuTiles = document.querySelectorAll("ul.menu-icon li");
    let menuBar = document.querySelector("ul.menu-bar");
    let menunav = document.querySelectorAll("ul.menu-bar li a")
    console.log(menuBar);

    menuIcon.addEventListener("click",()=>{
        menuTiles.forEach((tile)=>{
            tile.classList.toggle("active");
        })
        menuBar.classList.toggle("active");
    })
    menunav.forEach((nav)=>{
        nav.addEventListener("click",function() {
            menunav.forEach(na => na.classList.remove("active"))
            this.classList.add("active");
        })
    })
    window.addEventListener("scroll",function(){
        let current = "";
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollY >= sectionTop - sectionHeight/3.5){
            current = section.getAttribute("id");
          }
        })
        menunav.forEach((element)=>{
            element.classList.remove("active");
            if(element.classList.contains(current)){
                element.classList.add("active");
            }
        })
    })
})