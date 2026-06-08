const diagrams = [

{
  title: "Animal Cell",
  image: "images/animal-cell.png"
},

{
  title: "Plant Cell",
  image: "images/plant-cell.png"
},

{
  title: "DNA Structure",
  image: "images/dna.png"
}

];

function searchDiagram() {

  let text =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

  let html = "";

  diagrams.forEach(item => {

    if(item.title.toLowerCase().includes(text)) {

      html += `
        <h2>${item.title}</h2>

        <img
          src="${item.image}"
          class="diagram-image"
        >
      `;
    }

  });

  document.getElementById("results").innerHTML = html;
}
