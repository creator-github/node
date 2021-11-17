document.addEventListener("DOMContentLoaded", function(){

	const button = document.querySelector("button");
	const div = document.querySelector("div");

	const showData = () => {
		const url = "https://jsonplaceholder.typicode.com/users";
		const xhttp = new XMLHttpRequest();
		xhttp.open("GET", url);
		xhttp.send();
		xhttp.addEventListener("readystatechange", () => {
			if (xhttp.readyState === 4 && xhttp.status === 200) {
				div.innerText = xhttp.responseText;
			}
		})
	}

	button.addEventListener('click', showData);
	
});	