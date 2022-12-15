const root = document.querySelector("#root");
const search = document.querySelector("input");

const response = await fetch("https://jsonplaceholder.typicode.com/users");

const people = await response.json();

console.log(people);

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
function filterByName(searchLetters, listOfUsers) {
  return listOfUsers.filter((person) => person.name.includes(searchLetters));
}

root.classList.add(
  "container",
  "mx-auto",
  "items-center",
  "grid",
  "grid-cols-3",
  "gap-4"
);

const bioCards = people.map(createBioCard).join(" ");

root.innerHTML = bioCards;

console.log(filterByName("L", people));
