// Initial const
const root = document.querySelector("#root");

let letters = "";

// Function declarations/expressions
function createBioCard(user) {
  return `
  <section class="bg-slate-900 text-white p-6 min-w-max rounded-md">
  <h2 class="text-2xl font-semibold my-2">${user.name}</h2>
  <ul class="flex flex-col gap-y-4 my-4">
    <li><a href="mailto:${user.email}">${user.email}</a></li>
    <li><a href="tel:${user.phone}">${user.phone}</a></li>
    <li><a href="https://www.google.com/maps/place/${user.address.geo.lat},${user.address.geo.lng}">${user.address.street}, ${user.address.city}</a></li>
  </ul>
    <q class="italic">Centralized empowering task-force</q>
</section>
  `;
}

function filterByName(listOfUsers, searchLetters) {
  return listOfUsers.filter((user) => user.name.includes(searchLetters));
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

// ⚠️ 'input' doesn't exist until we update the 'root' 'innerHTML'
const search = document.querySelector("input");

search.addEventListener("keydown", (event) => {
  letters += event.key;
  const filteredUsers = filterByName(users, letters);

  console.log(filteredUsers);
});
