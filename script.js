function toggleDrawer(header) {
    const body = header.nextElementSibling;
    const icon = header.querySelector(".icon");

    if (body.style.display === "block") {
        body.style.display = "none";
        icon.textContent = "+";
    } else {
        body.style.display = "block";
        icon.textContent = "−";
    }
}
const input = document.querySelector(".search-bar input");
const cards = document.querySelectorAll(".card");

input.addEventListener("keyup", () => {
    const value = input.value.toLowerCase();
    cards.forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(value)
            ? "block" : "none";
    });
});