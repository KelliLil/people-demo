import Card from "./components/Card";
import Main from "./components/Main";
import Search from "./components/Search";

const root = document.querySelector("#root");

root.innerHTML = `
${Main()}
${Card()}
${Search()}
`;
