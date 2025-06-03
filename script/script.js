// 現階段沒有互動功能，先留空
// 之後可以加動畫或按鈕事件

document.addEventListener('DOMContentLoaded', () => {
  const roleDivs = document.querySelectorAll('.roles-icons > div');
  const championImg = document.querySelector('.champion-img img');

  const roleImages = {
    'Assassin': 'images/c_image1.jpg',
    'Fighter': 'images/c_image2.jpg',
    'Mage': 'images/c_image3.jpg',
    'Marksman': 'images/c_image4.jpg',
    'Support': 'images/c_image5.jpg',
    'Tank': 'images/c_image6.jpg'
  };

  roleDivs.forEach(div => {
    div.addEventListener('click', () => {
      const role = div.getAttribute('data-role');
      if (roleImages[role]) {
        championImg.src = roleImages[role];
        championImg.alt = role;
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".mode-thumbnails img");
  const video = document.getElementById("modeVideo");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      // Remove active class from all
      thumbnails.forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");

      // Update video source
      const videoSrc = thumb.getAttribute("data-video");
      video.querySelector("source").src = videoSrc;
      video.load();
      video.play();
    });
  });
});

