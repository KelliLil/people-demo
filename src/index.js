import { createBioCard, filterByName } from "./utils";

const root = document.querySelector("#root");

function renderCards(currentUsers) {
  main.innerHTML = currentUsers.map(createBioCard).join("");
}

// Business logic
const resp = await fetch("https://jsonplaceholder.typicode.com/users");
const users = await resp.json();
const bioCardsHTML = users.map(createBioCard).join("");

root.classList.add("flex", "flex-col", "gap-y-8", "items-center");

root.innerHTML = `
<div>
<label for="search" class="sr-only">Search</label>
<input type="search" id="search" placeholder="🔍" />
</div>
<main class="items-center grid grid-cols-3 gap-4">
  ${bioCardsHTML}
</main
`;

const main = document.querySelector("main");

const search = document.querySelector("input");

search.addEventListener(
  // Fires whenever value of input changes
  "input",

  (event) => {
    const filteredUsers = filterByName(users, event.target.value);
    renderCards(filteredUsers);
  }
);
