const assets = [ 
    "Burn1.mp4",
    "start.mp4",
    "start.png",
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
    } else {
        element = document.createElement("video");
        element.src = file;
        element.controls = true;
    } 

    container.appendChild(element);

    const btn = document.createElement("button");
    btn.innerText = "Copy URL";

    btn.onclick = () => {
        const url = window.location.origin + "/websiteassets/" + file;
        navigator.clipboard.writeText(url);
        alert("URL copied!");
    };

    container.appendChild(btn);
    gallery.appendChild(container);
});
