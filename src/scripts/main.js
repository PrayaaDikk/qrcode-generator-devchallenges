const linkInput = document.getElementById("link-input");
const btn = document.getElementById("btn");

let url = "";

btn.addEventListener("click", () => {
	url = linkInput.value;
	window.location.href = `/src/pages/generate.html?url=${url}`;
});
