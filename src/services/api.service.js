import ky from "ky";

export default {
  getUsers() {
    return ky.get("https://jsonplaceholder.typicode.com/users").json();
  },
};
