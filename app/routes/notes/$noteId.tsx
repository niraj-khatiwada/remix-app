import { Outlet } from "@remix-run/react";
import Nav from "~/components/Nav";

function NoteIdLayout() {
  return (
    <div>
      <Nav />
      NoteIdLayout:
      <Outlet />
    </div>
  );
}

export default NoteIdLayout;
