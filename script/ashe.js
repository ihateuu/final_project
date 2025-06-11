document.addEventListener("DOMContentLoaded", () => {
  const abilityCards = document.querySelectorAll(".ability-card");
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("abilityVideo");
  const closeBtn = document.querySelector(".close-btn");

  abilityCards.forEach(card => {
    card.addEventListener("click", () => {
      const videoSrc = card.getAttribute("data-video");
      video.src = videoSrc;
      modal.style.display = "block";
      video.play();
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    video.pause();
    video.src = "";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
      video.pause();
      video.src = "";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const slides = Array.from(track.children);
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const slideWidth = slides[0].getBoundingClientRect().width + 20; // 含gap，gap約1.25rem約20px

  let currentIndex = 0;

  // 將每個slide依序水平排列（可選，但我們用flex，所以不用特別設定left）
  // slides.forEach((slide, index) => {
  //   slide.style.left = slideWidth * index + "px";
  // });

  // 移動到指定slide
  function moveToSlide(index) {
    // 限制index範圍
    if (index < 0) index = 0;
    if (index > slides.length - visibleSlides) index = slides.length - visibleSlides;
    currentIndex = index;

    const distance = -(slideWidth * currentIndex);
    track.style.transform = `translateX(${distance}px)`;

    // 按鈕啟用/禁用
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= slides.length - visibleSlides;
  }

  // 可視造型數，依容器寬度動態算出（用簡單判斷）
  let visibleSlides = 4;
  function updateVisibleSlides() {
    const containerWidth = track.parentElement.offsetWidth;
    if (containerWidth < 500) {
      visibleSlides = 1;
    } else if (containerWidth < 700) {
      visibleSlides = 2;
    } else if (containerWidth < 900) {
      visibleSlides = 3;
    } else {
      visibleSlides = 4;
    }
  }

  updateVisibleSlides();
  moveToSlide(0);

  window.addEventListener("resize", () => {
    updateVisibleSlides();
    moveToSlide(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    moveToSlide(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    moveToSlide(currentIndex + 1);
  });
});


