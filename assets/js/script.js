const moBtn = document.querySelector(".mo-btn");
const nav = document.querySelector(".gnb");

// 모바일경우 nav열고닫기
moBtn.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    nav.style.transform =
      nav.style.transform === "translateX(0px)"
        ? "translateX(-100%)"
        : "translateX(0px)";
    nav.style.maxHeight = nav.style.maxHeight === 0 ? 0 : "100%";
  }
});

// 화면 크기 변경 시 nav 초기화
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    nav.style.transform = "translateX(0px)";
    nav.style.maxHeight = "100%"; // 데스크탑에서는 항상 보이게
  } else {
    nav.style.transform = "translateX(-100%)";
    nav.style.maxHeight = 0; // 모바일에서는 기본 숨김
  }
});
