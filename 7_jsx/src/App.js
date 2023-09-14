import { useState } from "react"; // useState의 리턴값은 배열이다.

const App = () => {
  const [counter, setCounter] = useState(0); // 1(지정해줄 변수), 2(함수)
  // let counter = 0;

  const setCount = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
    console.log(counter);
  };

  return (
    <div>
      <h1>Total clicks : {counter}</h1>
      <button onClick={setCount}>Click!</button>
    </div>
  );
};

export default App;
