const root = document.querySelector("#root");

const response = await fetch("https://jsonplaceholder.typicode.com/users");

const people = await response.json();

console.log(people);

function createBioCard(user) {
  return `
    <section class="bg-slate-900 text-white p-6 w-3/12 min-w-max rounded-md">
    <h2 class="text-2xl font-semibold my-2">${user.name}</h2>
    <ul class="flex gap-x-4 my-4">
      <li><a href="mailto:${user.email}">${user.email}</a></li>
      <li><a href="tel:${user.phone}">${user.phone}</a></li>
      <li><a href="https://www.google.com/maps/place/${user.address.geo.lat},${user.address.geo.lng}">${user.address.street}, ${user.address.city}</a></li>
    </ul>

      <q class="italic">Centralized empowering task-force</q>
  </section>
    `;
}

const bioCards = people.map(createBioCard).join(" ");

root.innerHTML = bioCards;

// {/* <section class="bg-slate-900 text-white p-6 w-3/12 min-w-max rounded-md"> */}
// {/* <h2 class="text-2xl font-semibold my-2">Clementina DuBuque</h2> */}
// {/* <ul class="flex gap-x-4 my-4"> */}
//   <li><a href="mailto:Rey.Padberg@karina.biz">Rey.Padberg@karina.biz</a></li>
//   <li><a href="tel:024-648-3804">024-648-3804</a></li>
//   <li><a href="https://www.google.com/maps/place/-38.2386,57.2232">Kattie Turnpike, Lebsackbury</a></li>
// </ul>

//   <q class="italic">Centralized empowering task-force</q>
// </section>
