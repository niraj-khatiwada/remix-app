import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Notes" },
    { name: "description", content: "Welcome to Remix Notes!" },
  ];
};

export default function Index() {
  return (
    <>
      <h1>Welcome to Remix Notes</h1>
      <Link to="/notes" className="text-blue-500">
        Try Notes Now
      </Link>
    </>
  );
}
