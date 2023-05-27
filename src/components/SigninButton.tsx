"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const SigninButton = () => {
  const { data: session } = useSession();
  // console.log("user: ", session?.user ? session?.user : "Não logado");
  // console.log("user: ", session?.user.image ? session?.user.image : "Sem imagem");

  function handleLoad(event: React.SyntheticEvent<HTMLImageElement>): void {
    const target = event.target as HTMLImageElement;
    target.style.opacity = "1";
  }

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <figure className="w-auto flex">
          {
            session?.user.image ?
              <Image
                className="rounded-full"
                onLoad={handleLoad}
                alt="avatar"
                src={session?.user.image}
                priority
                width={50}
                height={50}
              /> :
              <Image
                className="rounded-full p-1"
                onLoad={handleLoad}
                alt="avatar"
                src={`https://avatars.dicebear.com/api/initials/${session?.user.email}.svg`}
                priority
                width={50}
                height={50}
              />
          }
        </figure>

        <Link className="flex justify-center items-center text-white bg-violet-500 transition-colors border rounded p-2 hover:bg-violet-600" href={"/register"}>{session.user.username}</Link>
        <button onClick={() => signOut()} className="text-white bg-violet-500 transition-colors border rounded p-2 hover:bg-violet-600 ml-auto">
          Sair
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-4 ml-auto">
      <Link className="flex justify-center items-center text-white bg-violet-500 transition-colors border rounded p-2 hover:bg-violet-600" href={"/register"}>Registrar</Link>

      <button onClick={() => signIn()} className="text-white bg-violet-500 transition-colors border rounded p-2 hover:bg-violet-600">
        Fazer Login
      </button>
    </div>
  );
};

export default SigninButton;