// Initial const
const root = document.querySelector("#root");

// This keeps track of what we type in the search bar
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
// Take array of users and 1-1 for each output the HTML string, Join array back into string
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

search.addEventListener(
  "keydown",

  // Browser API models the event as an event object
  (event) => {
    // += is shorthand for letters = letters + event.key
    letters +=
      // Can access info about the event such as what key they pressed
      event.key;

    const filteredUsersHTML = filterByName(users, letters)
      .map(createBioCard)
      .join("");

    // need to take filteredUsers & turn them into HTML
    // need to update 'root' 'innerHTML' w/ new HTML

    root.innerHTML = `
<div>
<label for="search" class="sr-only">Search</label>
<input type="search" id="search" placeholder="🔍" />
</div>
<main class="items-center grid grid-cols-3 gap-4">
  ${filteredUsersHTML}
</main
`;
  }
);
