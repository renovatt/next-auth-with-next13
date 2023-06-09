import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'NotFound | Next Auth',
  description: 'Next-Auth login',
}

const NotuFound = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <p className="mt-60 text-red-700 font-bold">Página não encontrada.</p>
    </div>
  )
};

export default NotuFound;