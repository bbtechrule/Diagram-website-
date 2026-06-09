function sendSearch() {

  let input = document.getElementById("searchInput");
  let text = input.value.toLowerCase().trim();

  if (text === "") return;

  let chat = document.getElementById("chat");

  let found = diagrams.filter(item =>
    item.title.toLowerCase().includes(text)
  );

  let block = document.createElement("div");
  block.className = "message-block";

  let textDiv = document.createElement("div");
  textDiv.className = "message";
  textDiv.innerHTML = `<b>You searched:</b> ${text}`;

  block.appendChild(textDiv);

  if (found.length === 0) {
    let noDiv = document.createElement("div");
    noDiv.className = "message";
    noDiv.innerHTML = "No diagram found ❌";
    block.appendChild(noDiv);
  }

  found.forEach(item => {

    let wrap = document.createElement("div");
    wrap.className = "message";

    wrap.innerHTML = `
      <h3>${item.title}</h3>
      <img src="${item.image}" class="diagram-image">
    `;

    block.appendChild(wrap);
  });

  chat.appendChild(block);

  // Clear search box
  input.value = "";

  // Close mobile keyboard
  input.blur();

  block.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
