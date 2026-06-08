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

  // 👉 TEXT FIRST (TOP)
  let textDiv = document.createElement("div");
  textDiv.className = "message";
  textDiv.innerHTML = `<b>You searched:</b> ${text}`;

  block.appendChild(textDiv);

  // 👉 IF NOT FOUND
  if (found.length === 0) {
    let noDiv = document.createElement("div");
    noDiv.className = "message";
    noDiv.innerHTML = "No diagram found ❌";
    block.appendChild(noDiv);
  }

  // 👉 IMAGES BELOW TEXT
  found.forEach(item => {

    let wrap = document.createElement("div");
    wrap.className = "message";

    wrap.innerHTML = `
      <h3>${item.title}</h3>
      <img src="${item.image}" class="diagram-image">
    `;

    block.appendChild(wrap);
  });

  // 👉 ADD NEW BLOCK AT BOTTOM
  chat.appendChild(block);

  // clear input
  input.value = "";

  // 👉 SCROLL SMOOTHLY TO NEW BLOCK (NOT IMAGE)
  block.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
