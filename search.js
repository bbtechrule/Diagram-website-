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

  // Close keyboard after Send
  input.blur();

  block.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

/* ==========================
   CLOSE KEYBOARD WHEN
   REACHING FIRST RESULT
========================== */

const chat = document.getElementById("chat");
const input = document.getElementById("searchInput");

chat.addEventListener("scroll", () => {

  if (chat.scrollTop <= 30) {
    input.blur();
  }

});

/* ==========================
   CLOSE KEYBOARD WHEN
   DRAGGING SEARCH BAR DOWN
========================== */

const searchBox =
  document.querySelector(".search-container");

let startY = 0;

searchBox.addEventListener("touchstart", (e) => {

  startY = e.touches[0].clientY;

});

searchBox.addEventListener("touchmove", (e) => {

  let currentY =
    e.touches[0].clientY;

  if (currentY - startY > 30) {

    input.blur();

  }

});
