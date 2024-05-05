"use client";

import { login } from "@/actions";
import { useFormState } from "react-dom";

function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form action={formAction}>
      <input
        type="text"
        name="username"
        autoFocus
        required
        placeholder="Username"
        style={{ color: "blue", marginRight: 10, padding: 10, borderRadius: 5 }}
      />
      <input
        type="text"
        name="password"
        required
        placeholder="Password"
        style={{ color: "blue", marginRight: 10, padding: 10 , borderRadius: 5}}
      />
      <button
        type="submit"
        className="bg-indigo-500 py-2 px-6 rounded-md "
      >
        Login
      </button>

      {state?.error && <p>{state.error}</p>}
    </form>
  );
}

export default LoginForm;
