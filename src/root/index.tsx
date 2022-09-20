import { lazy, JSX } from "solid-js";

export function Root(): JSX.Element {
  return <div>Hello, world!</div>;
}

Root.Variants = {
  Lazy: lazy(() => import(".")),
};

export default Root;
