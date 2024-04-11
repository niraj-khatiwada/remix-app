import { Form, useActionData, useNavigation } from "@remix-run/react";
import { action } from "../route";

function Note() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();

  const isFormSubmitting = navigation?.state === "submitting";

  return (
    <Form method="post" action="/notes">
      <section className="my-2">
        <label htmlFor="title" className="block">
          Title
        </label>
        <input name="title" id="title" className="border-2 border-black-800" />

        {actionData?.errors?.title ? (
          <p className="text-red-500">{actionData?.errors?.title}</p>
        ) : null}
      </section>
      <section>
        <label htmlFor="description" className="block">
          Description
        </label>
        <input
          name="description"
          id="description"
          className="border-2 border-black-800"
        />
        {actionData?.errors?.description ? (
          <p className="text-red-500">{actionData?.errors?.description}</p>
        ) : null}
      </section>
      <button
        type="submit"
        className="bg-blue-700 px-2 py-1 my-2"
        disabled={isFormSubmitting}
      >
        {isFormSubmitting ? "Sending" : "Save"}
      </button>
    </Form>
  );
}

export default Note;
