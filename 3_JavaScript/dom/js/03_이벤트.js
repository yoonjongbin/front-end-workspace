// addEventListener('load', function(){
//     const h1 = document.querySelector('h1');
//     console.log(h1);
// });

// addEventListener('DOMContentLoaded', function(){
//     const h1 = document.querySelector('h1');
//     console.log(h1);
// });

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function(){
    h1.style.backgroundColor = "skyblue";
});


// const img1 = document.querySelector('.container img:nth-child(1)');
// const img2 = document.querySelector('.container img:nth-child(2)');
// const img3 = document.querySelector('.container img:nth-child(3)');
// const img4 = document.querySelector('.container img:nth-child(4)');
// const img5 = document.querySelector('.container img:nth-child(5)');


// const imgList = document.querySelectorAll('.container img');

// imgList[0].addEventListener('click', function(){
//     // img1.style.visibility = 'hidden';
//     imgList[0].style.visibility = 'hidden';
// });

// imgList[1].addEventListener('click', function(){
//     // img2.style.display = 'none';
//     imgList[1].style.display = 'none';
// });

// imgList[2].addEventListener('click', function(){
//     // img3.style.visibility = 'hidden';
//     imgList[2].style.visibility = 'hidden';
// });

// imgList[3].addEventListener('click', function(){
//     // img4.style.visibility = 'hidden';
//     imgList[3].style.visibility = 'hidden';
// });

// imgList[4].addEventListener('click', function(){
//     // img5.style.visibility = 'hidden';
//     imgList[4].style.visibility = 'hidden';
// });


// for(let i = 0; i < imgList.length; i++){
//     imgList[i].addEventListener('click', function(){
//         imgList[i].style.visibility = 'hidden';
//     });
// }

// function removeHandler(){
//     this.style.visibility = 'hidden';
// }

// function removeHandler(e){
//     e.target.style.visibility = 'hidden';
// }

// for(let i = 0; i < imgList.length; i++){
//     imgList[i].addEventListener('click', removeHandler);
// }


function removeHandler(e){  // 이벤트 객체
    console.log(e.currentTarget);   // this랑 같음
    if(e.target !== e.currentTarget){
        e.target.style.display = 'none';
    }

    // if(e.target !== container){
    //     e.target.style.display = 'none';
    // }
    
}

const container = document.querySelector('.container');
container.addEventListener('click', removeHandler);
