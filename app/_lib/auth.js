import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ], //these callback will run when the user hits the /account route
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        //if the user is already registered
        const existingGuest = await getGuest(user.email);
        //if the user is new
        if (!existingGuest)
          await createGuest({ email: user.email, fullName: user.name });

        return true;
      } catch (error) {
        return false;
      }
    },
    //we have access to the session object
    async session({ session, user }) {
      //grab the user data from database and add a guest id
      const guest = await getGuest(session.user.email);
      //mutate the guest id
      session.user.guestId = guest.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth(authConfig);
