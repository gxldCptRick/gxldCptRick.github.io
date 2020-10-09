const onload = () => {
  const canvas = document.getElementById("photo"),
    context = canvas.getContext("2d");
  context.beginPath();
  context.arc(75, 75, 75, 0, Math.PI * 2, true);
  context.clip();
  const img = new Image();
  img.onload = () => {
    context.drawImage(img, -60, 0);
    context.lineWidth = 15;
    context.strokeStyle = "#000";
    context.stroke();
  };
  img.src = "../images/gxldcptrickE.jpg";
};

window.addEventListener("load", onload);
document.addEventListener("load", onload);
