import { getSession } from "@/actions";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await getSession();

  return (
    <main className="grid place-items-center">
      <div className="p-20 rounded-md transition-opacity cursor-pointer hover:scale-125">
        {Object.keys(session).length > 0 ? (
          <>
            <h1 className="text-green-500">Logged in</h1>
            <p>Username: {session.username}</p>
          </>
        ) : (
          <>
            <h1 className="text-red-500">Not Logged In</h1>
            <Link href="/login" className="underline">Go to Login</Link>
          </>
        )}
      </div>
    </main>
  );
}
