const createStyles = () => {
    const style = document.createElement("style");
    style.textContent = `
        body { margin: 0; font-family: sans-serif; padding: 2rem; background: #f9f9f9; }
        form { display: flex; flex-direction: column; gap: 1rem; max-width: 500px; margin: auto; }
        input, textarea, button { padding: 10px; font-size: 1rem; }
    `;
    document.head.appendChild(style);
};

const renderForm = () => {
    const form = document.createElement("form");

    const urlInput = document.createElement("input");
    urlInput.placeholder = "URL de la imagen";
    urlInput.required = true;

    const descInput = document.createElement("textarea");
    descInput.placeholder = "Descripción (mín. 3 caracteres)";
    descInput.required = true;

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Guardar";

    form.appendChild(urlInput);
    form.appendChild(descInput);
    form.appendChild(button);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const url = urlInput.value.trim();
        const descripcion = descInput.value.trim();

        if (url && descripcion.length >= 3) {
            const galeria = JSON.parse(localStorage.getItem("galeria")) || [];
            galeria.push({ url, descripcion });
            localStorage.setItem("galeria", JSON.stringify(galeria));
            location.href = "index.html";
        } else {
            alert("Campos inválidos.");
        }
    });

    document.body.appendChild(form);
};

document.addEventListener("DOMContentLoaded", () => {
    createStyles();
    renderForm();
});
