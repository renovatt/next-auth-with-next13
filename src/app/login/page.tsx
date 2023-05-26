import LoginForm from '@/components/LoginForm'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Login | Next Auth',
    description: 'Next-Auth login',
}

const Login = () => {
    return (
        <div className="flex justify-center items-center gap-2 mt-20">
            <LoginForm />
        </div>
    )
}

export default Login