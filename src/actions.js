"use server";

import { getIronSession } from "iron-session";
import { sessionOptions } from "./lib";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import axios, { HttpStatusCode } from "axios";

export const getSession = async () => {
  const session = await getIronSession(cookies(), sessionOptions);
  return session;
};

export const login = async (prevState, formData) => {
  const session = await getSession();

  const username = formData.get("username");
  const password = formData.get("password");

  //   check the user in the database
  //   const user = await db.find({username, password})
  //   if(!user) {
  //     return {error : 'Wrong Credencials', status : false}
  //   }

  let res = await axios({
    method: 'get',
    url: 'https://pokeapi.co/api/v2/pokemon/ditto',
  });
  console.log(res.status, 'res data')

  if(res.status === HttpStatusCode.Ok) {
    if (username && password) {
      session.username = username;
      session.password = password;
  
      await session.save();
      redirect("/");
    }
  }

};
export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

export const updateProfile = async (formData) => {
  const session = await getSession();

//   console.log(formData, "formdata");

  const newUsername = formData.get("username");

  session.username = newUsername;
  await session.save();
  revalidatePath('/profile')
};
