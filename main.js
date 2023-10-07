let navbar = document.getElementById("navbar");

let search = document.getElementById("searchBlock");

let searchElement = document.getElementById("Search");

searchElement.addEventListener("mousedown", () => {
    let x = document.createElement("input");
    x.setAttribute("type", "text");
    navbar.appendChild(x);
    navbar.replaceChild(x, searchBlock);
    x.focus();
    x.addEventListener("blur", () => {
        // When the input box loses focus, replace it with the "Search" text
        navbar.appendChild(search);
        navbar.replaceChild(searchBlock, x);
    });
});