"use strict";

/* Étape 5 : insertion via des champs de saisie */

let lignes = 0;        // nombre de lignes (cours, slide ??)
let total_points = 0;  // total des points (cours, slide ??)

let persons = [
  { nom: "nom-1", prenom: "prenom-1", points: 5 },
  { nom: "nom-2", prenom: "prenom-2", points: 10 },
  { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

init();

function init() {
  // Boucle for...of (cours, slide ??)
  for (const person of persons) {
    doInsert(person.nom, person.prenom, person.points);
  }
}

function doInsert(nom, prenom, points) {
  // Additionner les points à total_points
  total_points += points;

  lignes++;
  doInsertRowTable(lignes, nom, prenom, points);

  // Mettre à jour l'espace résumé
  update_summary();
}

function update_summary() {
  // Récupérer les éléments par id : getElementById (cours, slide ??)
  const element_lignes = document.getElementById("p1");
  const element_points = document.getElementById("p3");

  // Modifier le contenu avec innerText (cours, slide ??)
  element_lignes.innerText = lignes + " ligne(s)";
  element_points.innerText = "Total point(s)= " + total_points;
}

function doInsertRowTable(num, nom, prenom, points) {
  const table = document.querySelector("table");
  const tbody = table.querySelector("tbody");
  const row = document.createElement("tr");
  row.setAttribute("class", "row");

  const col1 = document.createElement("td");
  const col2 = document.createElement("td");
  const col3 = document.createElement("td");
  const col4 = document.createElement("td");
  const col5 = document.createElement("td");

  col1.innerText = num;
  col2.innerText = nom;
  col3.innerText = prenom;
  col4.innerText = points;

  const chk = document.createElement("input");
  chk.setAttribute("type", "checkbox");
  col5.append(chk);

  col1.setAttribute("class", "col_number");
  col2.setAttribute("class", "col_text");
  col3.setAttribute("class", "col_text");
  col4.setAttribute("class", "col_number");
  col5.setAttribute("class", "col_chkbox");

  row.append(col1, col2, col3, col4, col5);
  tbody.append(row);
}

function consoleTableau() {
  console.log(persons);
}

function doNewData() {
  // Récupérer les champs par id : getElementById (cours, slide ??)
  const elt_nom = document.getElementById("form_nom");
  const elt_prenom = document.getElementById("form_prenom");
  const elt_points = document.getElementById("form_points");

  // Lire l'attribut value (cours, slide ??)
  const nom = elt_nom.value.trim();
  const prenom = elt_prenom.value.trim();
  // parseInt : convertir un texte en entier (cours, slide ??)
  const points = parseInt(elt_points.value);

  // Condition if/else + opérateur || (cours, slide ??)
  if (nom === "" || prenom === "" || Number.isNaN(points)) {
    // window.alert (cours, slide ??)
    alert("Formulaire incomplet !");
  } else {
    // Insérer dans le tableau HTML
    doInsert(nom, prenom, points);

    // Insérer aussi dans le tableau "persons" : push (cours, slide ??)
    persons.push({ nom: nom, prenom: prenom, points: points });

    // Vider les champs
    elt_nom.value = "";
    elt_prenom.value = "";
    elt_points.value = "";
  }
}
