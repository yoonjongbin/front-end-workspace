const asideIcon = document.querySelector("#aside-icon");

const main = document.querySelector("main");

asideIcon.addEventListener("click", function () {
  // 스타일 변경 방법도 있지만 클래스 속성을 추가 삭제로 하면 좋다.
  main.classList.toggle("aside-change");
});
