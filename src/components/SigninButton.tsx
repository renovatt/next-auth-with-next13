"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const SigninButton = () => {
  const { data: session } = useSession();

  console.log("user: ", session?.user ? session?.user : "Não logado");

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.username}</p>
        <button onClick={() => signOut()} className="text-red-600">
          Sair
        </button>
      </div>
    );
  }

  return (
    <button onClick={() => signIn()} className="text-green-600 ml-auto">
      Fazer Login
    </button>
  );
};

export default SigninButton;