import { Metadata } from "next";
import Image from "next/image";
import privateImage from '../../../public/privateOne.svg'

export const metadata: Metadata = {
  title: 'Rota-1 | Next Auth',
  description: 'Next-Auth login',
}

const privateRouterOne = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <p className="mt-60">Apenas usuário autenticado pode acessar esta página.</p>
      <figure>
        <Image
          priority
          width={200}
          height={200}
          alt="private-image"
          src={privateImage}
        />
      </figure>
    </div>
  )
}
export default privateRouterOne;