"use client"

import Form from '@/components/Form'
import { signOut, useSession } from "next-auth/react";

const Register = () => {
    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <div className="flex justify-center gap-5">
                <p className="text-sky-600">{session.user.username}</p>
                <button onClick={() => signOut()} className="text-red-600">
                    Sign Out
                </button>
            </div>
        );
    }

    return (
        <div className="flex justify-center gap-5">
            <Form />
        </div>
    )
}

export default Register;