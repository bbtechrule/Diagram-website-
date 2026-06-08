function sendSearch() {

  let input = document.getElementById("searchInput");
  let text = input.value.toLowerCase().trim();

  if (text === "") return;

  let chat = document.getElementById("chat");

  let found = diagrams.filter(item =>
    item.title.toLowerCase().includes(text)
  );

  let html = `<div class="message"><b>You searched:</b> ${text}</div>`;

  if (found.length === 0) {
    html += `<div class="message">No diagram found ❌</div>`;
  }

  found.forEach(item => {
    html += `
      <div class="message">
        <h3>${item.title}</h3>
        <img src="${item.image}" class="diagram-image">
      </div>
    `;
  });

  // ✅ FIX: safer update
  chat.insertAdjacentHTML("beforeend", html);

  input.value = "";

  // auto scroll
  chat.scrollTop = chat.scrollHeight;
}
