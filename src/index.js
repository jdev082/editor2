import { Editor } from "./editor/editor.js";
const toolbarBtn = document.getElementById("toolbarBtn")
const options = document.getElementById("options")

let contents = btoa(`
This div is editable
Another line
This <span style="font-style: italic;">word</span> is already italic
`);

document.addEventListener("DOMContentLoaded", () => {
    let editor = new Editor(document.querySelector("#editor"), {useTab: true});
    editor.load(contents);
});

toolbarBtn.addEventListener("click", () => {
    options.classList.toggle("hidden")
})