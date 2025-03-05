const tbody = document.querySelector("tbody");
const paniers = [];
function initialisation() {
	for (const product of products) {
		const template = document.querySelector("#ligneproduct");
		const produit = template.content.cloneNode(true);

		const tRow = produit.querySelector("tr");
		tRow.setAttribute("id", product.id);

		const name = produit.querySelector(".nom");
		name.textContent = product.name;

		const input = produit.querySelector("input");
		input.setAttribute("id", product.id);
		input.setAttribute("name", product.name);
		input.dataset.id = product.id;

		const price = produit.querySelector(".price");
		price.textContent = product.unitPrice;

		tbody.appendChild(produit);
	}
}

initialisation();

const inputs = document.querySelectorAll("input");
for(const input of inputs) {
	input.addEventListener("click", function() {

		let produitExist = null;
		for(const panier of paniers) {
			if(input.id === panier.id) {
				produitExist = panier;
				break;
			}
		}

		if(produitExist !==null){
			produitExist.quantity = input.value;
		}else{
			paniers.push({id: input.id, quantity: input.value});
		}

		const idSession = JSON.stringify(paniers.map(function(element) {
			return element.id;
		}));
		sessionStorage.setItem("id", idSession);

		const qtySession = JSON.stringify(paniers.map(function(element) {
			return element.quantity;
		}));
		sessionStorage.setItem("quantity", qtySession);
	});
}

