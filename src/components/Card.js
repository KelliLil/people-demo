export default function Card(user) {
  return `<section class="bg-slate-900 text-white p-6 min-w-max rounded-md">
  <h2 class="text-2xl font-semibold my-2">${user.name}</h2>
  <ul class="flex flex-col gap-y-4 my-4">
    <li><a href="mailto:${user.email}">${user.email}</a></li>
    <li><a href="tel:${user.phone}">${user.phone}</a></li>
    <li><a href="https://www.google.com/maps/place/${user.address.geo.lat},${user.address.geo.lng}">${user.address.street}, ${user.address.city}</a></li>
  </ul>
    <q class="italic">${user.company.catchPhrase}</q>
</section>`;
}
