function upDate(previewPic) {
    console.log("Hover triggered!", previewPic);
    console.log("Image source:", previewPic.src);
    console.log("Image alt text:", previewPic.alt);
  
    const imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.textContent = previewPic.alt;
}

function undo() {

    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "none";
    imageDiv.textContent = "Hover over an image below to display here.";
}
