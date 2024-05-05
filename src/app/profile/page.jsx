import { getSession, updateProfile } from "@/actions";
import { redirect } from "next/navigation";

async function ProfilePage() {
  const session = await getSession();
  console.log(session, "sess");

  // if (!Object.keys(session).length > 0) {
  //   redirect("/");
  // }

  return (
    <div className="grid place-items-center">
      <h1 className="text-lg font-bold underline">Profile</h1>
      <div className="inline-flex gap-2 py-4">
        <h1>Username:</h1>
        <p className="text-blue-400"> {session?.username}</p>
      </div>
      <form action={updateProfile}>
        <input
          defaultValue={session.username}
          name="username"
          required
          style={{
            color: "blue",
            padding: 10,
            borderRadius: 5,
            margin: 20,
          }}
        />
        <button
          type="submit"
          style={{ backgroundColor: "blue", padding: 10, borderRadius: 5 }}
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default ProfilePage;
