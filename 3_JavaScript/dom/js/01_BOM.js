/* open */

function btn1() {
    // alert("!!!!!!!!");
    // window.open("https://naver.com");
    window.open("https://naver.com", "네이버","width = 500, height = 600, resizable = no, location = no, menubar = no, scrollbars = no, status =no, toolbar = no");
}

/* Timer*/


function btn2() {
    let newWindow = open(); // window 함수들은 window 생략가능
    newWindow.alert('3초 후에 페이지 종료!');
    setTimeout(() => {
        newWindow.close();
    }, 3000);
}

function btn3() {
    let second = 0;
    
    setInterval(() => {
        console.log(`${++second}초`);
    }, 1000);
}


function btn4(){
    for(const key in location){
        console.log(`key : ${key}, value : ${location[key]}`);
    }
}


/* navigator */

function btn5(){
    for(const key in navigator){
        console.log(`key : ${key}, value : ${navigator[key]}`);
    }
}


/* screen */

function btn6(){
    for(const key in screen){
        console.log(`key : ${key}, value : ${screen[key]}`);
    }
}
