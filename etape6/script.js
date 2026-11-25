"use strict";

/* Étape 6 : suppression + 3 fonctionnalités supplémentaires */

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

function deleteRow() {
  // Étape 1 : tableau vide ? (if, cours, slide ??)
  if (lignes === 0) {
    alert("Le tableau est vide !");
    return;
  }

  // Étape 2 : récupérer le tableau et les checkbox cochées
  // querySelector / querySelectorAll (cours, slide ??)
  const table = document.querySelector("table");
  const checked = table.querySelectorAll("tbody .col_chkbox input:checked");

  // Étape 3 : aucune sélection ?
  if (checked.length === 0) {
    alert("Sélectionnez au moins une ligne !");
    return;
  }

  // Étape 4 : confirmation (window.confirm, cours, slide ??)
  if (!confirm("Supprimer " + checked.length + " ligne(s) ?")) {
    return;
  }

  // Étape 5 : récupérer toutes les lignes du corps du tableau
  const rows = table.querySelectorAll("tbody tr");

  // Étape 6 : parcours à l'envers (pour que splice ne décale pas les indices)
  // Boucle for (cours, slide ??)
  for (let i = rows.length - 1; i >= 0; i--) {
    const chk = rows[i].querySelector(".col_chkbox input");
    if (chk.checked) {
      // points = 4e cellule ; cells[3] (cours, slide ??)
      total_points -= parseInt(rows[i].cells[3].innerText);
      lignes--;
      rows[i].remove();     // supprimer la ligne du DOM (cours, slide ??)
      persons.splice(i, 1); // supprimer l'entrée dans "persons" (cours, slide ??)
    }
  }

  // Renuméroter la colonne N° pour rester cohérent
  table.querySelectorAll("tbody tr").forEach((row, idx) => {
    row.cells[0].innerText = idx + 1;
  });
  document.getElementById("chk_all").checked = false;

  // Étape 7 : message de succès + mise à jour du résumé
  update_summary();
  alert("Suppression effectuée !");
}

/* =====================  3 FONCTIONNALITÉS SUPPLÉMENTAIRES  ===================== */

// EXTRA 1 : case "Tout sélectionner" dans l'entête (addEventListener, cours, slide ??)
document.getElementById("chk_all").addEventListener("change", function () {
  document.querySelectorAll("tbody tr").forEach((row) => {
    // on ne coche que les lignes visibles (compatible avec la recherche)
    if (row.style.display !== "none") {
      row.querySelector(".col_chkbox input").checked = this.checked;
    }
  });
});

// EXTRA 2 : recherche en direct par nom / prénom (événement "input", cours, slide ??)
document.getElementById("search").addEventListener("input", function () {
  const q = this.value.trim().toLowerCase();
  document.querySelectorAll("tbody tr").forEach((row) => {
    const nom = row.cells[1].innerText.toLowerCase();
    const prenom = row.cells[2].innerText.toLowerCase();
    row.style.display = nom.includes(q) || prenom.includes(q) ? "" : "none";
  });
});

// EXTRA 3 : touche Entrée dans le formulaire = bouton Ajouter (événement "keydown")
document.querySelectorAll(".form_field").forEach((field) => {
  field.addEventListener("keydown", (e) => {
    if (e.key === "Enter") doNewData();
  });
});
