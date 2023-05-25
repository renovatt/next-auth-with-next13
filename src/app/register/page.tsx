"use client"

import RegisterForm from '@/components/RegisterForm'
import { signOut, useSession } from "next-auth/react";

const Register = () => {
    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <div className="flex justify-center items-center gap-2 mt-20">
                <p className="text-white bg-violet-500 transition-colors border rounded p-2 hover:bg-violet-600">{session.user.username} - {session.user.email}</p>
                <button onClick={() => signOut()} className="text-white bg-violet-500 transition-colors border rounded p-2 hover:bg-violet-600">
                    Sair
                </button>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center gap-2 mt-20">
            <RegisterForm />
        </div>
    )
}

export default Register;