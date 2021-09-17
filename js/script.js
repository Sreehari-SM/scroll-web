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
    let backgrounds = document.querySelectorAll(".bg")
    console.log(backgrounds);
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
    
    // window.addEventListener("scroll",()=>{
    //     sections.forEach((sec)=>{
    //          curr = sec.getAttribute("id");
    //     })
    //     backgrounds.forEach((background)=>{
    //         let value = window.scrollY;
    //         if(background.classList.contains(curr)){
    //             background.style.backgroundPositionY=-value *0.5 + "px";
    //         }
           
    //     })
    // })
})