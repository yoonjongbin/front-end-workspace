### 목차
- [변수와 연산자](#변수와-연산자)
- [조건문](#조건문)
- [배열](#배열)
- [반복문](#반복문)
- [함수](#함수)
# 자바스크립트

1. 웹 브라우저에서 읽고 실행되는 언어

2. 보안성이 없음

3. html 내에 작성

4. 대소문자의 구분 엄격

## 적용 방법


1. 내부 스크립트


- html 문서 내에 스크립트 정의 후 직접 작성

```html
<script type="text/javascript">
    스크립트 내용
</script>
```


2. 외부 스크립트


- 스크립트를 다른 문서에 작성하고 "파일명.js"로 저장

- 효과를 적용할 문서에

```html
<script type = "text/javascript" src = "파일명.js">
    다른 문장 작성 금지
</script>
```

<br>


# 변수와 연산자

- [위로 이동](#목차)

## var, const, let

```js
var 변수명 = 값
변수명 = 값;

const 변수명 = 값;

let 변수명 = 값;
변수명 = 값;
```

1. var : 예전 방식 (사용 X)

2. const : 상수 - 값을 수정할 수 없다.

3. let : 변수 - 값을 수정할 수 있다.


- 자주 사용하는 건 const, 가끔 사용하는 건 let, 거의 사용하지 않는건 var


## 출력

```js
console.log();
```


## 데이터 타입 확인
```js
type of 데이터
```


## 문자열

```js
"Hello World"
'Hello World'
```


### 템플릿 문자열

- 문자열과 변수를 같이 사용할 때

```js
const a = 1;
console.log(`aaaa ${a}`);
```

### 연산자(+)

```js
console.log('Hello, ' + 'JavaScript');
```

### 인덱싱

- 특정 위치에 있는 문자만 가져온다.

```js
문자열[index];  // index는 0부터
```

### 길이

```js
문자열.length;
```


### 대문자 or 소문자

```js
문자열.toUpperCase();   // 대문자
문자열.toLowerCase();   // 소문자
```


### 문자열 -> 숫자

```js
Number(문자열);
```

### 숫자 -> 문자열

```js
String(숫자);
숫자.toString();
```


## 숫자

```js
1; // 정수
1.2; // 실수
```

### 실수 -> 정수

```js
parseInt(실수);
```

### 연산자

```js
+
-
*
/
%   // 나머지
**  // 제곱
```


## undefined와 null

```js
undefined;  // 정의되지 않았다.
null;       // 아무것도 없음
```


## Boolean

```js
true;
false;
```


### 비교연산자

```js
==, === // 같다
!=, !== // 다르다
>, <    // 크다
>=, <=  /크거나 같다
```

### 논리 연산자

!: 아니다


```js
!true;  // false
!false; // true
```

&& : 그리고

```js
true && true;   // true
true && false;  // false
false && true;  // false
false && false; // false
```

|| : 또는

```js
true || true;   // true
true || false;  // true
false || true;  // true
false || false; // false
```

### 다른 자료형 -> Boolean

- 0, NaN, "", null, undefined는
false로 변환한다.

- 나머지는 true


```js
Boolean(데이터);
```

<br>

[위로 이동](#목차)


# 조건문

```js
if(조건){
    조건이 true
} else{
    조건이 false
}
```


## 삼항 연산자

```js
조건 ? 조건이 true : 조건이 false
```


## else if

- else if는 여러개 사용

```js
if(조건 A){
    조건 A가 true
} else if(조건 B){
    조건 A가 false이면서, 조건 B가 true
} else{
    모든 조건이 false
}
```


## switch

```js
switch(데이터){
    case 조건 A:
        조건 A가 true
        break;
    case 조건 B:
        조건 B가 true
        break;
    default:
        모든 조건이 false
}
```


<br>

[위로 이동](#목차)



# 배열

```js
const 배열 = [데이터1, 데이터2, 데이터3, ...];
```


## 문자열 -> 배열


- 공백을 기준으로 자른다.

- 특정 구분자로 나누고 싶다면 split 안에 지정한다.

```js
문자열.split();
```


## 배열 -> 문자열

- 특정 구분자로 나누고 싶다면 join 안에 지정

```js
배열.join();
```

## 데이터에 접근

```js
배열[index];
```

## 인덱스 찾기

```js
const 인덱스 = 배열.indexOf(데이터);
```

## 배열에 추가

```js
배열.push(데이터);      // 맨 뒤에 추가
배열.unshift(데이터);   // 맨 앞에 추가
배열.splice(index, 0, 데이터);  // 원하는 위치에 추가
```


## 배열에서 삭제

```js
배열.pop();     // 맨 위에 데이터 삭제
배열.shift();   // 맨 앞에 데이터 삭제
배열.splice(index, 1);  // 원하는 위치의 데이터 삭제
```

## 배열의 길이

```js
배열.length;
```


## 배열을 정렬

```js
배열.sort();
```


### 거꾸로 정렬

```js
배열.reverse();
```


<br>

[위로 이동](#목차)

# 반복문


## while

```js
while(true){
    if(조건){
        break;      // 벗어나고 싶을 때
        continue;   // 건너뛰고 싶을 때
    }
}
```

## for

```js
for(변수선언 및 초기값(let i = 0); 조건(i < 반복 횟수;); 증감식(i++)){
    console.log(i);
}
```

### for in

```js
for(const 인덱스 in 배열){
    console.log(인덱스);
}
```


### for of

```js
for(const 값 of 배열){
    console.log(값);
}
```

<br>

[위로이동](#목차)

# 함수

- **선언적 함수**

```js
function 함수명(매개변수){
    return 결과값;
}
```


- 익명 함수

```js
const 함수명 = function(매개변수){
    return 결과값;
}
```


- **화살표 함수**

```js
const 함수명 = (매개변수) => {
    return 결과값;
}
```


- 호출

```js
함수명();
함수명(매개변수);
```

##