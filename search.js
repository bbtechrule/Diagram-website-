function sendSearch() {

  let input = document.getElementById("searchInput");
  let text = input.value.toLowerCase().trim();

  if (text === "") return;

  let chat = document.getElementById("chat");

  let found = diagrams.filter(item =>
    item.title.toLowerCase().includes(text)
  );

  let block = `<div class="message-block">`;

  block += `<div class="message"><b>You searched:</b> ${text}</div>`;

  if (found.length === 0) {
    block += `<div class="message">No diagram found ❌</div>`;
  }

  found.forEach(item => {
    block += `
      <div class="message">
        <h3>${item.title}</h3>
        <img src="${item.image}" class="diagram-image">
      </div>
    `;
  });

  block += `</div>`;

  // 👉 ADD NEW BLOCK AT BOTTOM
  chat.innerHTML += block;

  input.value = "";

  // 👉 SCROLL TO NEW SEARCH (bottom)
  chat.scrollTo({
    top: chat.scrollHeight,
    behavior: "smooth"
  });
}
