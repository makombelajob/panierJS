#TP panier json

##Notions
* utiliser Json
* utiliser sessionStorage
* manipuler les tableaux et le dom

##Pré-requis
Reprise du tp panier :
js/products.js
images/sprite.svg
css/styles.css
index.html

##Consignes

Votre mission consiste à compléter scripts.js pour rendre fonctionnel la gestion du panier

##Étapes :

### Étape 1 :

Initialiser le tableau du panier en prenant en compte products.js et le template mis à disposition dans index.html (ne pas prendre en compte le stock, les quantités sont à 0 par défaults );

### Étape 2 :

Gérer les modifications des quantités du panier en persistant les valeurs dans sessionStorage dans un json (sans gérer les totaux)

### Étape 3 :

Une fois les quantités modifiées, gérer les totaux dans l'affichage du panier

### Étape 4 :

Au chargement de la page, initialiser le panier avec les valeurs de sessionStorage si elles existent

### Étape 5 :

Gérer la suppression dans le panier (consiste à passer la quantité à 0)

### Étape 6 :

Lors de la modification d'une quantité, contrôler que le stock soit bien disponible, si la demande est supérieur au stock, la quantité prendra le stock disponible.