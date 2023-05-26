import React from "react";

const privateRouterTwo = () => {
  return <div className="flex justify-center items-center gap-5">
    <p className="mt-60">Apenas usuário autenticado deve acessar esta página.</p>
  </div>;
};

export default privateRouterTwo;