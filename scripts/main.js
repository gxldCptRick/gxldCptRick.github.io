const onload = () => {
  const canvas = document.getElementById("photo"),
    context = canvas.getContext("2d");
  context.beginPath();
  const imageWidth = 75;
  context.arc(imageWidth, imageWidth, imageWidth, 0, Math.PI * 2, true);
  context.clip();
  const img = new Image();
  img.width = 100;
  img.height = 100;
  img.style = "width:10px;height:10px;";
  img.onload = () => {
    context.drawImage(img, 0, 0, 150, 150);
    context.lineWidth = 15;
    context.strokeStyle = "#000";
    context.stroke();
  };
  img.src = "images/gxldcptrickE.jpg";
};

window.addEventListener("load", onload);
document.addEventListener("load", onload);
