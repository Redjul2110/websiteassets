const assets = [
    "image1.png",
    "image2.jpg",
    "video1.mp4"
];

const gallery = document.getElementById("gallery");

assets.forEach(file => {

    const container = document.createElement("div");
    container.className = "asset";

    const extension = file.split('.').pop().toLowerCase();

    let element;

    if (["png","jpg","jpeg","gif","webp"].includes(extension)) {
        element = document.createElement("img");
        element.src = file;
    } 
    
    else if (["mp4","webm","ogg"].includes(extension)) {
        element = document.createElement("video");
        element.src = file;
        element.controls = true;
    }

    container.appendChild(element);

    const copyBtn = document.createElement("button");
    copyBtn.innerText = "Copy URL";

    copyBtn.onclick = () => {
        const url = window.location.href + file;
        navigator.clipboard.writeText(url);
        alert("URL copied!");
    };

    container.appendChild(copyBtn);

    gallery.appendChild(container);
});