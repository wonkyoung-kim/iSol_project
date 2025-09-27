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

const topBtn = document.querySelector(".btn-top");

// 스크롤 위치에 따라 버튼 표시/숨김
window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// 버튼 클릭 시 최상단으로 이동
topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // 부드럽게 스크롤
  });
});
