// This will be treated as layout for /notes/$noteId page since there's already a folder will same name
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
