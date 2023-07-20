/* document */

function btn1() {
    console.log(document);
    console.log(document.head);
    console.log(document.title);
    console.log(document.body);
}

/* id */

function btn2(){
    const div = document.getElementById("testId");
    console.log(div);
}

/* class */

function btn3(){
    const div = document.getElementsByClassName("testClass");
    console.log(div);
    console.log(div[0]);
}


/* name */


function btn4(){
    const div = document.getElementsByName("testName");
    console.log(div);
}

/* tag */


function btn5(){
    const div = document.getElementsByTagName("div");
    console.log(div);
}


/* 선택자 */

function btn6(){
    let div = document.querySelector("#testId");
    div = document.querySelector(".testClass");
    div = document.querySelector(".testClass");
    console.log(div);

    let divList = document.querySelectorAll("div");
    console.log(divList);
}

/* textContent, innerHTML */

function btn7(){
    // div 2개 가지고 온다.(변수명 : divList)

    const divList = document.querySelectorAll(".testClass");
    divList[0].textContent = '<span>안녕하세요</span>';
    divList[1].innerHTML = '<span>안녕하세요</span>';
}


/* setAtrribute(), getAttribute() */


function btn8(){
    // #testId인 것만 가져온다.

    const div = document.querySelector("#testId");
    div.setAttribute("data-test", "테스트");
    console.log(div.getAttribute("data-test"));
    console.log(div.getAttribute("class"));
}



/* style */ 
function btn9(){
    const div = document.querySelector("#testId");

    div.style.color = "orange";
    div.style.backgroundColor = "yellow";
}


/* add, remove, cotains, toggle*/

function btn10(){
    const div = document.querySelector("#testId2");

    div.classList.add("black");
}

function btn11(){
    const div = document.querySelector("#testId2");

    div.classList.remove("black");
}

function btn12(){
    const div = document.querySelector("#testId2");
    const check = div.classList.contains("black")
    console.log(check);
    if(check){
        div.classList.remove("black");
    } else{
        div.classList.add("black");
    }
}

function btn13(){
    const div = document.querySelector("#testId2");

    div.classList.toggle("black");
}


/* createElement, appendChild */

function btn14(){
    const div = document.querySelector("#testId2");

    const p = document.createElement("p");
    p.innerHTML = "Lorem Ipsum"
    div.appendChild(p);
    
    const input = document.createElement("input");
    input.placeholder = "Bye~~";
    div.appendChild(input);

}

/* parentNode, removeChild */

function btn15(){
    const div = document.querySelector("#testId2");
    const p = document.querySelector("p");

    // div.removeChild(p);
    p.parentNode.removeChild(p);
}