// Get the search element
let searchElement = document.getElementById("search");

// Get the navbar element
let navbar = document.getElementById("navbar");

// Get the content element
let content = document.querySelector(".content");

// Function to replace the "Search" text with an input box
function addInputBox() {
    // Create a new input element
    let inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.id = "searchInput";

    // Add the input element to the navbar
    navbar.appendChild(inputElement);

    // Remove the search text element
    searchElement.remove();

    // Focus on the input box
    inputElement.focus();

    // Add an event listener to handle input box behavior
    inputElement.addEventListener("blur", () => {
        // When the input box loses focus, replace it with the "Search" text
        searchElement = document.createElement("span");
        searchElement.id = "search";
        searchElement.textContent = "Search";
        navbar.appendChild(searchElement);
        inputElement.remove();
    });
}

// Add a click event listener to the "Search" text
searchElement.addEventListener("click", addInputBox);

document.getElementById("Home").addEventListener("mousedown", () => {
    window.location.replace("https://marketplaceforscience-a8a2b.web.app/main.html")
});

let upload = document.getElementById("Upload");

upload.addEventListener("mousedown", () => {
    window.location.replace();
})

let filters = document.getElementById("Filters");

filters.addEventListener("mousedown", () => {
    let x = document.createElement("priceUp");
    let y = document.createElement("priceDown");
    x.setAttribute("type", "button");
    y.setAttribute("type", "button");
    navbar.appendChild(x);
    navbar.appendChild(y);
    x.focus();
    y.focus();
    x.addEventListener("mousedown", () => {
        for(let i = 0; i < projects.size; i = i + 1)
        {
            for(let j = 0; j < projects.size; j = j + 1)
            {
                let min = projects[0].price;
            }
        }
    });
    y.addEventListener("mousedown", () => {
        
    });
    filters.addEventListener("mousedown", () => {
        x.remove();
        y.remove();
    });
});
