// Section 2：摧毀主堡圖片切換
function changeImage(imagePath, title, description) {
  const mainImg = document.getElementById("mainImage");
  const titleElem = document.getElementById("imageTitle");
  const descElem = document.getElementById("imageDescription");

  mainImg.src = imagePath;
  titleElem.textContent = title;
  descElem.innerHTML = description.replace(/\n/g, "<br>");
}

// Section 3：殺出血路圖片切換
document.addEventListener("DOMContentLoaded", function () {
  const battleIcons = document.querySelectorAll(".battle-icons img");
  const battleImage = document.querySelector(".battle-map");
  const battleTitle = document.querySelector(".battle-right-description h3");
  const battleDesc = document.querySelector(".battle-right-description p");

  battleIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const newImage = icon.getAttribute("data-image");
      const newTitle = icon.getAttribute("data-title");
      const newDesc = icon.getAttribute("data-description");

      battleImage.src = newImage;
      battleTitle.textContent = newTitle;
      battleDesc.textContent = newDesc;
    });
  });
});

// Section 4：挑戰野區 圖片與描述切換
document.addEventListener("DOMContentLoaded", function () {
  const jungleIcons = document.querySelectorAll(".jungle-icons img");
  const jungleImage = document.getElementById("jungleImage");
  const jungleTitle = document.getElementById("jungleTitle");
  const jungleDesc = document.getElementById("jungleDescription");

  jungleIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const newImage = icon.getAttribute("data-image");
      const newTitle = icon.getAttribute("data-title");
      const newDesc = icon.getAttribute("data-description");

      jungleImage.src = newImage;
      jungleTitle.textContent = newTitle;
      jungleDesc.textContent = newDesc;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const roleIcons = document.querySelectorAll('.role-icons img');
  const roleImage = document.getElementById('roleImage');
  const roleTitle = document.getElementById('roleTitle');
  const roleText = document.getElementById('roleText');

  roleIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      roleImage.src = icon.dataset.image;
      roleTitle.textContent = icon.dataset.title;
      roleText.textContent = icon.dataset.description;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const abilityIcons = document.querySelectorAll('.ability-icons img');
  const abilityImage = document.getElementById('abilityImage');
  const abilityTitle = document.getElementById('abilityTitle');
  const abilityText = document.getElementById('abilityText');

  abilityIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      abilityImage.src = icon.dataset.image;
      abilityTitle.textContent = icon.dataset.title;
      abilityText.textContent = icon.dataset.description;
    });
  });
});