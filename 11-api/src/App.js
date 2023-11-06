import KakaoMap from "./components/KakaoMap";
import DaumPostCode from "./components/DaumPostCode";

function App() {
  return (
    <>
      <button onClick={DaumPostCode}>주소검색</button>
      {/* <KakaoMap /> */}
    </>
  );
}

export default App;
