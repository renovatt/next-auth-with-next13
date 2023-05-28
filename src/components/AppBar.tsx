import Link from "next/link";
import React from "react";
import SigninButton from "./SigninButton";

const AppBar = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <Link className="flex justify-center items-center text-white bg-violet-500 transition-colors border rounded p-2 hover:bg-violet-600" href={"/"}>Página Inicial</Link>
      <Link className="flex justify-center items-center text-white bg-violet-500 transition-colors border rounded p-2 hover:bg-violet-600" href={"/privateRouterOne"}>Rota 1</Link>
      <Link className="flex justify-center items-center text-white bg-violet-500 transition-colors border rounded p-2 hover:bg-violet-600" href={"/privateRouterTwo"}>Rota 2</Link>

      <SigninButton />
    </header>
  );
};

export default AppBar;