import { Link, useParams } from "@remix-run/react";

function NoteId() {
  const { noteId } = useParams();

  return (
    <div>
      NoteId: {noteId}
      <Link className="block text-blue-600" to="./detail">
        Go to detail page
      </Link>
    </div>
  );
}

export default NoteId;
