# BOM (Browser Object Model)


- 브라우저와 관련된 객체들

## window


- 브라우저 창에 대한 설정을 하는 가장 최상위 객체

- 브라우저가 실행될 때, 가장 먼저 생성되면 하위에 브라우저 각 요소에 해당하는 객체가 만들어진다.

- BOM : location, history, navigator, screen

- DOM : document

### open(첫번째, 두번째, 세번째)


- 첫번째 : 새 창에서 열고자하는 url 주소

- 두번째 : 창 이름, 창 이름이 같은게 이미 열려 있을 경우, 새로 열리지 않고 이미 열려있는 곳에서 새로고침

- 세번째 : 새 창의 너비, 높이, 주소창 여부, 툴바 여부, 스크롤바 여부, 등 새로운 창의 특성

* 창의 특성 (브라우저마다 적용범위가 다름)
    - width : 창의 너비(px)

    - height : 창의 높이(px)

    - resizable : 창 크기 조절 가능 여부(yes or no)

    - location : 주소창 여부

    - menubar : 메뉴바 여부

    - scrollbars : 스크롤바 여부

    - status : 상태표시줄 여부

    - toolbar : 도구모음 여부

### 타이머(Timer)


- 일정 시간이 경과된 이후에 특정 작업을 할 수 있도록 제공되는 함수

#### setTimeout()


- 매개값으로 전달된 콜백 함수를 단 한 번만 실행


#### setInterval()


- 매개값으로 전달된 콜백 함수를 반복해서 실행



## location


- 브라우저의 주소 표시줄(URL)과 관련된 객체로 주소와 관련된 정보를 가진 객체

### reload()


- 페이지를 새로고침


### href()


- 현재 페이지의 url주소를 가지고 있는 속성으로 해당 속성의 값을 변경해서 페이지를 이동


### assign(), replace()


- 두 함수 모두 페이지를 이동시키지만 replace()는 assign()과 달리 history에 기록되지 않는다.



## history


- 브라우저에서 이동한 문서의 내역을 관리하는 객체


## navigator


- 브라우저에 대한 정보를 가진 객체로 고객에 대한 정보를 분석할 때 브라우저 별로 다른 동작을 해야 할 때 사용


## screen


- 사용자의 디스플레이에 대한 정보를 가진 객체


## DOM (Document Object Model)


- HTML 문서의 태그들을 객체로 생성하고 객체들의 관계(상/하위)에 따라 트리 자료구조로 구성한 객체

    HTML -> head, body
    head -> title, meta, ...
    bodt -> ...
    와 같은 방식으로 트리구조로 이루어져 있다.

- document 객체는 window 객체의 하위 객체로 DOM 트리의 가장 최상위 객체

- HTML 태그(요소)를 노드(Node)라고 한다.


### 문서 객체 가져오기


- HTML 문서에 당연히 있는 내용들은 태그별로 가져올 수 있다.

```js

document.head;
document.title;
document.body;

```

### id로 검색


- 태그의 id 속성값을 이용해서 객체를 가져온다.

```js

document.getElementById("아이디");

```


### class로 검색


- 태그의 class 속성값을 이용해서 객체를 배열에 담아 가져온다.

- 동일한 class 속성값을 갖는 태그가 여러 개 존재할 수 있기 때문에 배열로 리턴

```js

document.getElementsByClassName("클래스");

```

### name으로 검색


- 태그의 name 속성값을 이용해서 객체를 배열에 담아 가져온다.

- 동일한 name 속성값을 갖는 태그가 여러개 존재할 수 있기 때문에 배열로 리턴

```js

document.getElementsByName("이름");


```

### 태그로 검색


- 태그명을 이용해서 객체를 배열에 담아 가져온다.

- 동일한 태그가 여러 개 존재할 수 있기 때문에 배열로 리턴

```js

document.getElementsByTagName("태그");

```


### CSS 선택자를 이용해서 검색


```js

document.querySelector("선택자");
document.querySelectorAll("선택자");


```


## 문서 객체 조작하기

### textContent, innerHTML


- textContent : 문서 객체 내에 문자 그대로 넣는다.

- innerHTML : HTML 형식으로 넣는다.

```js

문서객체.textContent;
문서객체.innerHTML;


```


### setAttribute, getAttribute


- setAttribute : 문서 객체의 속성을 추가하거나 수정할 때

- getAttribute : 문서 객체의 속성을 가져올 때

- data-xxx : data-index, data-id, data-role 등 data-로 시작하면 어떤 속성이든 필요에 따라 임의로 추가할 수 있다.


```js

문서객체.setAttribute(속성이름, 값)
문서객체.getAttribute(속성이름)

```


### style 조작


- 문서 객체의 스타일을 조작할 때는 style로 접근할 수 있다.

- style 속성은 - 기호 대신 캐멀 케이스로 사용을 해야 한다.
    ex. background-color -> backgroundColor

```js

문서객체.style = "값"

```


### classList


- 사실 스타일을 조작 할 때, style로 접근하는 방식보다 미리 클래스에 스타일을 지정하고 classList로 조작

- contains는 해당 클래스명 유무를 체크

- 있다면 삭제, 없다면 추가를 알아서 해주는 toggle을 사용하는 것도 있음

```js

문서객체.classList.add("클래스명");
문서객체.classList.remove("클래스명");

문서객체.classList.contains("클래스명");
문서객체.classList.toggle("클래스명");

```


## 문서 객체 추가하기


- createElement로 문서 객체를 생성

- appendChild로 부모 객체에 자식 객체를 추가

```js

const 자식객체 = document.createElement(문서객체이름);  // 태그
부모객체.appendChild(자식객체);

```


## 문서 객체 삭제하기


- 부모 객체에서 자식 객체를 삭제할 수 있다.

- 만약 부모 객체에 접근해야 한다면 parentNode를 사용한다.

```js

부모객체(문서객체.parentNode).removeChild(자식객체);

```

<!-- 
# 이벤트


- 모든 문서 객체에는 클릭되거나 마우스 위에 올리거나 등 이벤트를 가지고 있다.


## 이벤트 추가

```CSS

문서객체.addEventListener(이벤트이름, 함수)

```

- addEventListener : 이벤트 이름과 함수를 지정하고 문서 객체의 해당 이벤트가 실행되면 지정된 함수가 실행된다.


## 이벤트 삭제


```js

문서객체.removeEventListener(이벤트이름, 함수)

``` -->

# 이벤트 (Event)


- 브라우저에서 사용자가 하는 모든 행위(마우스 클릭, 키보드 입력 등)를 이벤트(Event)라 한다.

- 자바 스크립트를 사용하여 브라우저에서 발생하는 이벤트에 대해 특정 기능을 수행하도록 설정할 수 있다.


## 이벤트 설정 방법


### 인라인 방식


- HTML 태그에 이벤트 핸들러 속성을 이용하여 직접 자바 스크립트 코드를 작성하는 방법

```html

<button onclick="수행코드">버튼</button>

```


### 이벤트 핸들러 프로퍼티 방식


- 요소가 가지고 있는 이벤트 속성에 이벤트 핸들러를 설정하는 방법

```js

문서객체.onclick = function{
    // 수행코드
}

```


### addEventListener() 방식


- W2C에서 공식적으로 권장하는 이벤트 지정 방식

- 하나의 이벤트에 대해 여러 개의 이벤트 핸들러를 등록할 수 있다.

```js

문서객체.addEventListener(이벤트이름, 함수);

```

#### 이벤트 삭제

```js

문서객체.removeEventListener(이벤트이름, 함수);

```


# 정규표현식 (REGEX / REGEXP : Regular Expression)


- 특정 패턴을 가진 문자열을 찾거나 또는 찾아서 변경(치환) 할 때, 사용하는 형식 언어

- 정규표현식을 이용하면 문자열에 대한 특정 패턴 조건 검사시 복잡한 조건을 제시할 필요 없이 간단하게 처리가능


## 정규표현식 객체 생성


- 정규 표현식 객체를 생성하기 위해서는 정규 표현식 리터럴과 RegExp 생성자 함수를 사용

- 리터럴을 사용하는 것 일반적이다.

```js

const regExp1 new RegExp('패턴');
const regExp2 = /패턴/;     // 중요! 많이 씀

```


### RegExp 객체에서 제공하는 함수


- **정규식.test(문자열)** : 문자열에서 정규식 값과 일치하는 값이 있으면 true, 없으면 false 리턴

- 정규식.exec(문자열) : 문자열에서 정규식값과 일치하는 값이 있으면 처음 매칭된 문자열 리턴, 없으면 null 리턴


### String 객체에서 제공하는 함수


- 문자열.match(정규식) : 문자열에서 정규식 값과 일치하는 값을 찾아서 리턴

- 문자열.search(정규식) : 문자열에서 정규식 값과 일치하는 값의 시작 인텍스 값을 리턴(만일 없다면 -1 리턴)

- 문자열.replace(정규식, 바꿀값) : 문자열에서 정규식 값과 일치하는 첫번째 부분을 바꿀값으로 변경해서 리턴

- 문자열.split(정규식) : 정규식에 지정된 값을 구분자로 해서 쪼개진 값들이 담겨있는 배열 리턴


## 플래그 문자

```js

const regExp = /패턴/플래그;

```


- 정규표현식의 검색 방식을 성정하기 위해 사용

- 순서와 상관없이 하나 이상의 플래그를 동시에 설정할 수 있다.

1. i : 대소문자 가리지 않고 비교

2. g : 전역으로 비교

3. m : 여러 줄의 검사를 수행


## 메타 문자


- 메타문자를 이용해서 정규표현식으로 검색조건을 삼을 "특정패턴"을 제시가능

- 문자열이 해당 정규식으로 제시한 특정패턴에 만족하는지 test()를 통해 검사하거나, replace()를 이용해서 치환가능


### 반복 검색


- {m, n}은 앞선 패턴이 최소 m번 최대 n번 반복되는 문자열을 의미

- + : 앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의미 {1, }

- ? : 앞선 패턴이 최대 한 번 이상 반복되는 문자열을 의미 {0, 1}



### 문자열의 앞, 뒤 구분


- ^ : 문자열의 시작을 의미

- $ : 문자열의 마지막을 의미


### OR 검색


- [] : [] 내에 문자들 중 하나라도 존재할 경우를 의미


### 임의의 문자열 검색


- . : 임의의 문자 한 개를 의미하고, 문자 내용은 무엇이든 상관없다.


### 추가 메타 문자


- \d : 숫자를 의미
- \D : 숫자가 아닌 문자를 의미

- \w : 알파벳, 숫자, 언더 스코어(_)를 의미
- \W : 알파벳, 숫자, 언더 스코어(_)가 아닌 문자를 의미

- \s : 공백 문자를 의미 (띄어쓰기, 탭, 줄바꿈)
- \S : 공백 문자가 아닌 문자를 의미 
