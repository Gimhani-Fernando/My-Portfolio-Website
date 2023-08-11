//Scroll arrows
const toTop = document.querySelector(".to-top");
const toBottom = document.querySelector(".to-bottom");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }

    if (window.pageYOffset < document.documentElement.scrollHeight - window.innerHeight - 100) {
        toBottom.classList.add("active");
    } else {
        toBottom.classList.remove("active");
    }
});

toTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

toBottom.addEventListener("click", () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo(0, maxScroll);
});



//Toggle 
const accordion = document.getElementsByClassName('toggle-content-box');

for(i=0; i<accordion.length;i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}


//Progress circles
const skillText = document.querySelectorAll(".skillText");
const progress = document.querySelectorAll(".progress");
const skillContainer = document.querySelector(".container");

let bol = false;

window.addEventListener("scroll",function(){
    if (this.pageXOffset > skillContainer.offsetTop - 600 && bol == false){
        for(let i = 0; i < skillText.length; i++){
            skillText[i].innerText = 0;
            count = 0;

            progress[i].computedStyleMap.bottom = "100%";
            progress[i].style.bottom = skillText[i].dataset.count - 100 + "%";

            function updateCount(){
                target = parseInt(skillText[i].dataset.count);

                if(count<target){
                    count++;
                    skillText[i].innerText = count;
                    setTimeout(updateCount,50);
                }else{
                    skillText[i].innerText = target + "%"
                }
            }
            updateCount();

            bol = true;
        }
    }
})