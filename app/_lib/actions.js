"use server";

import { signIn, signOut } from "./auth";

export async function signInAction() {
  //the first argument is the provider [if we have like a diffrent providers we r gonna have to loop over them ]
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
    await signOut({redirectTo:'/'})
}