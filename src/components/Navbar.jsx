import Link from "next/link";
import React from "react";
import LogoutForm from "./LogoutForm";
import { getSession } from "@/actions";

async function Navbar() {
  const session = await getSession();
  console.log(session, "session");

  return (
    <nav className="flex flex-row justify-center gap-5 py-5">
      <Link href={"/"} className="hover:underline">Homepage</Link>
      <Link href={"/premium"} className="hover:underline">Premium*</Link>
      <Link href={"/profile"} className="hover:underline">Profile*</Link>
      {Object.keys(session).length === 0 && <Link href={"/login"} className="hover:underline">Login</Link>}
      {Object.keys(session).length !== 0 && <LogoutForm />}
    </nav>
  );
}

export default Navbar;
