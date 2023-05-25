"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const SigninButton = () => {
  const { data: session } = useSession();
  console.log("user: ", session?.user ? session?.user : "Não logado");

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <Link className="text-white bg-violet-500 transition-colors border rounded p-2 hover:bg-violet-600" href={"/register"}>{session.user.username}</Link>
        <button onClick={() => signOut()} className="text-white bg-violet-500 transition-colors border rounded p-2 hover:bg-violet-600 ml-auto">
          Sair
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-4 ml-auto">
      <Link className="text-white bg-violet-500 transition-colors border rounded p-2 hover:bg-violet-600" href={"/register"}>Registrar</Link>

      <button onClick={() => signIn()} className="text-white bg-violet-500 transition-colors border rounded p-2 hover:bg-violet-600">
        Fazer Login
      </button>
    </div>
  );
};

export default SigninButton;