
// let index = null;

// const button1 = document.querySelector('.main-btn button:nth-child(1)');
// const button2 = document.querySelector('.main-btn button:nth-child(2)');
// const imgList = document.querySelectorAll('.main-image img');

// function clickHandler(e){
//     if(e.target === button1){
//         for(let i = 0; i < imgList.length; i++){
//             index = Math.floor(Math.random() * 3);
//             console.log(index);
//             imgList[i].setAttribute('src', imgList[index].getAttribute('src'));
//         }
//     } else if(e.target === button2){
//         location.reload;
//     }
    
// }

// button1.addEventListener('click', clickHandler);
// button2.addEventListener('click', clickHandler);


const click = document.querySelector('.click');
const restart = document.querySelector('.restart');

const imgList = document.querySelectorAll('.main-image img');
const result = document.querySelector('.main-result');

const span = document.querySelector('.click span');

let count = 0;

// console.log(click);
// console.log(restart);
// console.log(imgList);
// console.log(span);

function clickHandler() {
    // console.log("click!!");
    span.innerHTML = ++count;
    const random = [Math.floor(Math.random() * 3) + 1,
                    Math.floor(Math.random() * 3) + 1,
                    Math.floor(Math.random() * 3) + 1];

    // console.log(random);

    for(let i = 0; i < imgList.length; i++){
        // console.log(imgList[i]);
        imgList[i].setAttribute('src', `../../resources/spy${random[i]}.jpg`);
    }

    if(random[0] === random[1] && random[1] === random[2]){
        // console.log("이미지 3개 일치!!");
        result.innerHTML = 'Congratulation!! Press restart to play again!!';
        click.setAttribute("disabled", "disabled");
    }
}
function restartHandler() {
    // console.log("restart!!");
    // location.reload();

    for(let i = 0; i < imgList.length; i++){
        imgList[i].setAttribute('src', "../../resources/spy1.jpg");
    }
    count = 0;
    span.innerHTML = "";
    result.innerHTML = "";
    click.removeAttribute("disabled");
}

click.addEventListener('click', clickHandler);
restart.addEventListener('click', restartHandler);

