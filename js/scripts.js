const tbody = document.querySelector("tbody");
const paniers = {};
function initialisation() {
	for (const product of products) {
		const template = document.querySelector("#ligneproduct");
		const produit = template.content.cloneNode(true);

		const tRow = produit.querySelector("tr");
		tRow.setAttribute("id", product.id);
		tRow.dataset.id = product.id;

		const name = produit.querySelector(".nom");
		name.textContent = product.name;

		const input = produit.querySelector("input");
		input.setAttribute("id", "quantity" + product.id);
		input.setAttribute("name", product.name);
		input.dataset.id = product.id;
		input.value = 0;

		const price = produit.querySelector(".price");
		price.textContent = product.unitPrice;

		const pricet = produit.querySelector(".pricet");
		pricet.textContent;

		tbody.appendChild(produit);
	}
}

initialisation();


function paniersSave(){
	const paniersJson = JSON.stringify(paniers);
	sessionStorage.setItem("id", paniersJson);
}

function prixTotal() {
	let total = 0;
	const totales = document.querySelectorAll(".pricet");
	for(const totale of totales) {
		total += Number(totale.textContent);
	}
	const facture = document.querySelector("tfoot td.price");
	facture.textContent = total;
}

const inputs = document.querySelectorAll("input");
for(const input of inputs) {
	input.addEventListener("input", function() {

		const productValue = Number(input.value);
		const tr = input.closest("tr");
		const productId = tr.dataset.id;

		paniers[productId] = productValue;
		paniersSave();

		let priceUnit = Number(tr.querySelector(".price").textContent);
		let unitTotal = productValue * priceUnit;

		let pricet = tr.querySelector(".pricet");
		pricet.textContent = unitTotal;
		prixTotal();
	});
}

