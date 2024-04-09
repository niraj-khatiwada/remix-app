import { ActionFunctionArgs, redirect, json } from "@remix-run/node";
import { useLoaderData, useRouteError } from "@remix-run/react";

import Note from "./Note";

function Notes() {
  const notes = useLoaderData<{ title: string; description: string }[]>();
  return (
    <div>
      <Note />
      <h1>Notes: </h1>
      {notes?.map((note) => (
        <>
          <p>{note?.title ?? ""}</p>
          <p>{note?.description ?? ""}</p>
        </>
      ))}
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError() as { message: "string" };
  console.log(error);

  return <aside>Nested error: {error?.message ?? ""}</aside>;
}

export async function loader() {
  return [
    {
      title: "saved hello",
      description: "saved world",
    },
  ];
}

// Form Submission
export async function action({ request, params, context }: ActionFunctionArgs) {
  console.log(JSON.stringify({ request, context, params }, null, 2));
  const formData = await request.formData();

  // Throw errors that'll be caught by error boundaries
  // throw new Error("Oops");

  // throw json(
  //   {
  //     message: "No notes found.",
  //   },
  //   {
  //     status: 404,
  //     statusText: "Not Found",
  //   }
  // );

  console.log(
    "form data",
    String(formData.get("title")),
    String(formData.get("description"))
  );

  console.log("formData", Object.fromEntries(formData));

  if (Math.round(Math.random() * 10) % 2 === 0) {
    return json({
      errors: { title: "Invalid title", description: "Invalid description." },
    });
  }

  return redirect("/");
}

export default Notes;
