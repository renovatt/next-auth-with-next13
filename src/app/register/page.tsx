"use client"

import RegisterForm from '@/components/RegisterForm'
import { signOut, useSession } from "next-auth/react";

const Register = () => {
    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <div className="flex flex-col justify-center items-center gap-2 mt-40">
                <p className="w-60 text-center text-white bg-violet-500 transition-colors border rounded p-2 hover:bg-violet-600">Autenticado</p>
                <p className="text-white bg-violet-500 transition-colors border rounded p-2 hover:bg-violet-600">{session.user.username} - {session.user.email}</p>
                <button onClick={() => signOut()} className="w-60 bg-neutral-900 text-white rounded px-3 h-10 font-semibold text-sm hover:bg-neutral-950 cursor-pointer">
                    Sair
                </button>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center gap-2 mt-5">
            <RegisterForm />
        </div>
    )
}

export default Register;