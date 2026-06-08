function searchDiagram() {

  const text = document.getElementById("searchInput").value.toLowerCase();

  const results = diagrams
    .filter(item => item.title.toLowerCase().includes(text))
    .map(item => `
      <h2>${item.title}</h2>
      <img src="${item.image}" class="diagram-image">
    `)
    .join("");

  document.getElementById("results").innerHTML = results;
}

// show all images on load
searchDiagram();
