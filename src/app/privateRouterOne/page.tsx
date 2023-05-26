import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Rota-1 | Next Auth',
  description: 'Next-Auth login',
}

const privateRouterOne = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <p className="mt-60">Apenas usuário autenticado pode acessar esta página.</p>
    </div>
  )
}
export default privateRouterOne;