import { render } from "solid-js/web";
import Root from "./root";

const node = document.querySelector("#app");

if (node) render(Root, node);
