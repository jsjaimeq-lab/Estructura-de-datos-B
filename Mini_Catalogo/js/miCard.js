class MiCard extends HTMLElement {
    constructor() {
    super();
    const shadow = this.attachShadow({mode: "open"});
    shadow.innerHTML = `
    <div class="card">
        <h2>${this.getAttribute("nombre")}</h2>
        <p>${this.getAttribute("precio")}</p>
        <p>${this.getAttribute("descripcion")}</p>
    </div>
    `;
    }
}
customElements.define("mi-card", MiCard);
