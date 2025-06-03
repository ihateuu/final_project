// 留言功能
document.getElementById("commentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.getElementById("commentInput");
  const comment = input.value.trim();
  if (comment) {
    const li = document.createElement("li");
    li.textContent = comment;
    document.getElementById("commentList").appendChild(li);
    input.value = "";
  }
});

// 圖片上傳預覽功能
document.getElementById("uploadForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = document.createElement("img");
      img.src = event.target.result;
      img.className = "uploaded-image";
      document.getElementById("previewContainer").appendChild(img);
    };
    reader.readAsDataURL(file);
    fileInput.value = "";
  }
});
