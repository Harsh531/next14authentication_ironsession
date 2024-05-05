import { logout } from "@/actions";

function LogoutForm() {
  return (
    <form action={logout}>
      <button type="submit" className="bg-indigo-500 py-1 px-4 rounded-lg">Logout</button>
    </form>
  );
}

export default LogoutForm;
