import Link from "next/link";
import React from "react";
import SigninButton from "./SigninButton";

const AppBar = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <Link className="text-black transition-colors hover:text-blue-500" href={"/"}>Página Inicial</Link>
      <Link className="text-black transition-colors hover:text-blue-500" href={"/userPost"}>Postagens</Link>
      <Link className="text-black transition-colors hover:text-blue-500" href={"/register"}>Registrar</Link>
      
      <SigninButton />
    </header>
  );
};

export default AppBar;