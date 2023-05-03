import { createHeader, createContentArea } from "./components.js";

const body = document.querySelector('body');
body.classList.add('dark-mode');

export default function initPage() {
    const header = createHeader();
    body.appendChild(header);

    const content = createContentArea();
    body.appendChild(content);
    
}