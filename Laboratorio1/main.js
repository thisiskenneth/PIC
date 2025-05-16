const images = JSON.parse(localStorage.getItem("galeria")) || [];

const createStyles = () => {
    const style = document.createElement("style");
    style.textContent = `
        body {
            margin: 0;
            font-family: sans-serif;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background:rgb(23, 221, 125);
            color: white;
        }

        header, footer {
            background: #222;
            padding: 1rem;
            text-align: center;
        }

        .content-wrapper {
            display: flex;
            flex: 1;
        }

        .sidebar {
            width: 200px;
            background: #eee;
            padding: 1rem;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            color: black;
        }

        main {
            flex: 1;
            padding: 1rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 1rem;
            background: #fff;
            color: black;
        }

        .gallery-item {
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 10px;
            text-align: center;
            background-color: white;
        }
    `;
    document.head.appendChild(style);
};
 

const createLayout = () => {
    const header = document.createElement("header");
    header.textContent = "Galería de Imágenes";
    document.body.appendChild(header);

    const contentWrapper = document.createElement("div");
    contentWrapper.className = "content-wrapper";

    const sidebar = document.createElement("div");
    sidebar.className = "sidebar";

    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Registrar nueva imagen";
    registerBtn.onclick = () => location.href = "registro.html";

    const clearBtn = document.createElement("button");
    clearBtn.textContent = "Borrar galería";
    clearBtn.onclick = () => {
        localStorage.removeItem("galeria");
        location.reload();
    };

    sidebar.appendChild(registerBtn);
    sidebar.appendChild(clearBtn);

    const main = document.createElement("main");
    main.id = "main-gallery";

    contentWrapper.appendChild(sidebar);
    contentWrapper.appendChild(main);
    document.body.appendChild(contentWrapper);

};


const renderGallery = () => {
    const main = document.getElementById("main-gallery");
    main.innerHTML = "";
    images.forEach(({ url, descripcion }) => {
        const item = document.createElement("div");
        item.className = "gallery-item";
        item.innerHTML = `<img src="${url}" alt="img" width="100%" /><p>${descripcion}</p>`;
        main.appendChild(item);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    createStyles();
    createLayout();
    renderGallery();
});
