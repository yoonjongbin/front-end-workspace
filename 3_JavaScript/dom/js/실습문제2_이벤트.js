
let maxScrollValue = document.body.offsetHeight - window.innerHeight ;
const progressBar = document.querySelector('.progress-bar');
// console.log(progressBar);

function resizeHandler(){   
    // 전체 스크롤 할 수 있는 범위 = 바디 전체 높이 - 윈도우 현재 창의 높이
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
}

window.addEventListener('scroll', function(){
    // console.log(window.pageYOffset);    // deprecated

    // console.log(window.scrollY);
    // console.log(document.body.offsetHeight);
    // console.log(innerHeight);


    // console.log((window.scrollY / maxScrollValue) * 100);
    progressBar.style.width = (window.scrollY / maxScrollValue) * 100 + '%';
});

window.addEventListener('resize', resizeHandler());

resizeHandler();


// navigation click event

const nav = document.querySelector('nav');
let current;

function navHandler(e){
    
    if(current){
        current.style.backgroundColor = 'transparent';
        current.style.color = 'black';
    }

    if(e.target !== e.currentTarget){
        e.target.style.backgroundColor = 'black';
        e.target.style.color = 'white';
        current = e.target;
    }
    // console.log(e.target);
    
}

nav.addEventListener('click', navHandler);


// mouser wheel event

const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');

function sectionHandler(){
    // window.screenY
}

let currentSection = section1;

window.addEventListener('wheel', function(event){
    if(event.deltaY > 0){   // 휠을 내린경우
        if(currentSection == section1){
            window.scrollTo({top: section2.offsetTop, behavior: 'smooth'});
            currentSection = section2;
        }else if(currentSection == section2){
            window.scrollTo({top: section3.offsetTop, behavior: 'smooth'});
            currentSection = section3;
        }
    }else{  // 휠을 올린경우
        if(currentSection == section2){
            window.scrollTo({top: section1.offsetTop, behavior: 'smooth'});
            currentSection = section1;
        }else if(currentSection == section3){
            window.scrollTo({top: section2.offsetTop, behavior: 'smooth'});
            currentSection = section2;
        }
    }
});



// scroll - animation 살짝 ~

window.addEventListener('scroll', function(){
    if(section2.getBoundingClientRect().top === 0){
        // console.log(section2.children[0]);
        section2.children[0].classList.add('text-animation');
    }else{
        section2.children[0].classList.remove('text-animation');
    }
});