
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