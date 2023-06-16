const form = document.getElementById("form");
const linkInput = document.getElementById("inputPassword2");
const parent = document.getElementById("parent");
form.addEventListener("submit", async(e) => {
    e.preventDefault();
    const originalLink = linkInput.value;
    const apiUrl = `https://api.shrtco.de/v2/shorten?url=${originalLink}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        linkInput.value = data.result.full_short_link;

    } catch (e) {

        console.error(e);
    }

});