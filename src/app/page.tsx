"use client"

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return <div className="flex justify-center items-center gap-5">
    {session ? <p className="mt-60">Seja bem vindo, {session.user.username}! </p> :
      <p className="mt-60">Página inicial - Rota Livre</p>}
  </div>;
}