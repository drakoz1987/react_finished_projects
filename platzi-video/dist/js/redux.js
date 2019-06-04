const $form = document.getElementById("form");

//El profesor coloca el signo de dolar en esa variable para denotar que es una variable del DOM, es completamente opcional

$form.addEventListener("submit", handleSubmit);

const handleSubmit = e => {
	e.preventDefault();
	const data = new FormData($form);
	const title = data.get("title");
	console.log(title);
};
console.log("Here");
