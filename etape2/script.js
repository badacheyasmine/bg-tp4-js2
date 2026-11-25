"use strict";

/*
 * Étape 2 : insertion d'une nouvelle ligne
 * NB : remplacez "slide ??" par le numéro réel du slide du cours.
 */

// Déclaration d'une fonction avec paramètres (cours, slide ??)
function doInsertRowTable(num, nom, prenom, points) {
  // Récupérer l'élément tableau : document.querySelector (cours, slide ??)
  const table = document.querySelector("table");
  const tbody = table.querySelector("tbody");

  // Créer un élément tr : document.createElement (cours, slide ??)
  const row = document.createElement("tr");

  // Affecter la classe "row" avec setAttribute (cours, slide ??)
  row.setAttribute("class", "row");

  // Créer 5 éléments td (colonnes)
  const col1 = document.createElement("td");
  const col2 = document.createElement("td");
  const col3 = document.createElement("td");
  const col4 = document.createElement("td");
  const col5 = document.createElement("td");

  // Remplir le contenu avec innerText (cours, slide ??)
  col1.innerText = num;
  col2.innerText = nom;
  col3.innerText = prenom;
  col4.innerText = points;

  // La dernière colonne contient un input de type checkbox
  const chk = document.createElement("input");
  chk.setAttribute("type", "checkbox");
  col5.append(chk);

  // Affectation des classes CSS
  col1.setAttribute("class", "col_number");
  col2.setAttribute("class", "col_text");
  col3.setAttribute("class", "col_text");
  col4.setAttribute("class", "col_number");
  col5.setAttribute("class", "col_chkbox");

  // Ajouter les colonnes à la ligne avec append() (cours, slide ??)
  row.append(col1, col2, col3, col4, col5);

  // Ajouter la ligne au tableau
  tbody.append(row);
}