if (!sessionStorage.getItem("galeria-iniciada")) {
    localStorage.removeItem("galeria");
    sessionStorage.setItem("galeria-iniciada", "true");
}


const images = JSON.parse(localStorage.getItem("galeria")) || [];

const createStyles = () => {
    const style = document.createElement("style");
    style.textContent = `
        body {
            margin: 0;
            font-family: sans-serif;
            display: flex;
        }
        header, footer {
            background: #222;
            color: white;
            text-align: center;
            padding: 1rem;
        }
        .sidebar {
            width: 200px;
            background: #eee;
            padding: 1rem;
            height: 100vh;
            box-sizing: border-box;
        }
        main {
            flex: 1;
            padding: 1rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 1rem;
        }
        .gallery-item {
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 10px;
            text-align: center;
        }

    `;
    document.head.appendChild(style);
};

const createLayout = () => {
    const header = document.createElement("header");
    header.textContent = "Galería de Imágenes";
    document.body.appendChild(header);

    const sidebar = document.createElement("div");
    sidebar.className = "sidebar";
    const link = document.createElement("button");
    link.textContent = "Registrar nueva imagen";
    link.onclick = () => {
        location.href = "registro.html";
    };
    sidebar.appendChild(link);
    document.body.appendChild(sidebar);

    const main = document.createElement("main");
    main.id = "main-gallery";
    document.body.appendChild(main);

    const footer = document.createElement("footer");
    footer.textContent = "© 2025 - Galería";
    document.body.appendChild(footer);
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
