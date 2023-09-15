import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Button = ({ text, click }) => {
  return <button onClick={click}>{text}</button>;
};

//메소드는 소문자로 시작
Button.propTypes = {
  // isRequired를 하면 틀린 타입을 넣게 되면 에러를 발생시킨다.
  text: PropTypes.string.isRequired,
  // 메소드 내부는 대문자로 시작
  click: PropTypes.func.isRequired,
};

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter(counter + 1);
  };

  const minus = () => {
    setCounter(counter - 1);
  };

  console.log("always~~~");

  // useEffect는 여러개 사용 가능
  useEffect(() => {
    console.log("useEffext");
  }, []); // 1(함수), 2(배열)

  useEffect(() => {
    console.log("counter change");
  }, [counter]);
  // 어떤 데이터 값이 변화 할때 실행하고 싶은거 실행(ex. counter의 값이 변화 할때 counter change log로 출력)

  return (
    <div>
      {/*  가독성을 추구하고 싶다면 속성 맨뒤에 ',' 로 끝내고 저장하자 */}
      <h1 style={{ backgroundColor: "pink", color: "skyblue" }}>
        Total clicks : {counter}
      </h1>

      {/* 타입을 정할 수 있다. */}
      <Button text="+1" click={plus} />
      {/* <Button text={plus} click="+1" /> */}
      <Button text="-1" click={minus} />

      {/* <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button> */}

      {/* <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button> 
      내가한거 */}
    </div>
  );
};

export default Counter;
