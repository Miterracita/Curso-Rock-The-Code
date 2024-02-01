import "./styles.css";

export const myHeader = () => {
    return `<div class="header">
            <div class="logo">
                <img src="/logito.png" alt="logo" />
            </div>
            <div class="buscador">
                <input type="text" placeholder="Busca tus imagenes" id="buscador" />
            </div>
            <div class="btn-buscar">
                <button id="btn-buscar">Buscar</button>
            </div>
        </div>`
};