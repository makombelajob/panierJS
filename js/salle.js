// delaration des variables
const cart = JSON.parse(sessionStorage.getItem("id")) || {};
//#4 Initialiser la cart s'il y as de la data dans la sessionStorage
console.table(cart);
//declaration des fonctions
function initialisation() {
    // Initialiser le tableau du panier en prenant en compte products.js
    // et le template mis à disposition dans index.html
    // (ne pas prendre en compte le stock, les quantités sont à 0 par défaults );
    //les données sont dans products

    //parcourir le tableau products
    for (const product of products) {

        //dans l'itération toutes les données du produit seront contenu sur cette ligne


        //comment on récupère les informations du produit dans l'itération ?
        const id = product.id;

        const price = product.unitPrice;

        const nom = product.name;

        //cibler tbody dans #tableau
        const tbody = document.querySelector("#tableau tbody");
        console.log(tbody)
        //cloner le template
        const tplLigneProduit = document.querySelector("#ligneproduct");

        let ligneProduit = tplLigneProduit.content.cloneNode(true);
        //mettre les bonnes valeurs dedans
        ligneProduit.querySelector("tr").setAttribute("id", "product" + id);
        ligneProduit.querySelector("tr").dataset.id = id;
        ligneProduit.querySelector(".nom").textContent = nom;
        ligneProduit.querySelector("input").setAttribute("id", id);
        ligneProduit.querySelector("input").setAttribute("name", "quantity" + id);
        //#4 Tester s'il y as une valeur existante dans la sessionStorage , mise à jours de la somme
        ligneProduit.querySelector("input").value = 0;
        ligneProduit.querySelector(".price").textContent = price;

        ligneProduit.querySelector("svg").dataset.id = id;
        //insérer la nouvelle ligne dans tbody
        tbody.appendChild(ligneProduit)
        //fin du parcours
    }
    console.clear();

    const svgs = document.querySelectorAll("svg");
    for(const svg of svgs) {
        svg.addEventListener("click", function() {
            const sgvId = svg.dataset.id;
            document.querySelector("input").value = 0;
        });
    }
    
}

function savecart() {
    //convertire cart en JSON
    const jsoncart = JSON.stringify(cart);
    //stoquer jsoncart dans sessionstorage
    sessionStorage.setItem("cart", jsoncart);
}

function calculTotal() {
    //calcule du montant total (la somme des toteaux de chaque ligne)
    let totalFinal = 0;
    //cibler les cellules contenant le total de chaque ligne
    const factures = document.querySelectorAll(".pricet");
    // console.table(Array(factures));
    for (const facture of factures) {
        totalFinal = totalFinal + Number(facture.textContent);

    }
    console.clear();
    // Cibler la cellule du montant total de tout les produits
    const prixFinal = document.querySelector("#totalAmount");
    console.log(prixFinal);
    //ecrire le montant totale dans la cellule
    prixFinal.textContent = totalFinal;
}

//programme principal
// Etape 1
initialisation();

//etape 2
// Gérer les modifications des quantités du panier en persistant les valeurs dans
// sessionStorage dans un json (sans gérer les totaux)

//cibler les inputs

const inputs = document.querySelectorAll("#tableau input");
for (const input of inputs) {
    //ecouter le changement des input du panier
    input.addEventListener("input", function () {
        //recuperer la valeur de la nouvelle quantité
        const newqte = Number(input.value);
        //cibler le tr qui est grand parent de linput
        const tr = input.closest("tr");
        //recupérer la valeur de data-id du tr
        const idproduct = tr.dataset.id;
        //sauvegarder la valeur dans cart
        cart[idproduct] = newqte;
        savecart();

        console.clear();
        //recupérer le prix unitaire
        const prixUnit = Number(tr.querySelector(".price").textContent);
        console.log(prixUnit);
        //cibler la cellule contenant le totale de la ligne
        const total = tr.querySelector(".pricet");
        //ecrire le totale dans la cellule
        total.textContent = newqte * prixUnit;
        calculTotal();

    });
    //enregistrer cart en JSON dans sessionStorage
}