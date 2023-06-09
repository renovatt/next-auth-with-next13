"use client"

import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { LoginSchemaTypeProps } from '@/@types'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '@/components/Input'
import { signIn } from 'next-auth/react'
import { loginSchema } from '@/zod'
import { ErrorMessage } from './ErrorMessage'
import { toast } from 'react-toastify'
import { loginUser } from '@/services'

const LoginForm = () => {
    const methods = useForm<LoginSchemaTypeProps>({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: zodResolver(loginSchema)
    });

    const userLoginSubmit = async (data: LoginSchemaTypeProps) => {
        const { response: user, error } = await loginUser(data)

        if (user?.result) {
            await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: true,
                callbackUrl: '/'
            })
            toast.success(`${user.message.toString()} ${user.result.username}!`)
        } else {
            toast.error(error.toString())
        }
    }

    const loginByGithub = () => {
        signIn("github", { callbackUrl: '/' })
        toast.success('Bem vindo!')
    }

    return (
        <FormProvider {...methods}>
            <section className="flex justify-center items-center flex-col gap-4 w-full bg-gradient-to-b from-white to-gray-200 shadow max-w-xs border p-2 rounded">
                <h1 className="text-2xl text-violet-500 text-center">Fazer Login</h1>
                <form className="flex flex-col gap-4 mt-2 w-full max-w-xs"
                    onSubmit={methods.handleSubmit(userLoginSubmit)}>
                    <Input
                        label='E-mail'
                        name='email'
                        type='email'
                        placeholder='joao@gmail.com'
                    />
                    <ErrorMessage field='email' />

                    <Input
                        label='Senha'
                        name='password'
                        type='password'
                        placeholder='******'
                    />
                    <ErrorMessage field='password' />

                    <input className="bg-violet-500 text-white rounded px-3 h-10 font-semibold text-sm hover:bg-violet-600 cursor-pointer" type="submit" value="Fazer Login" />
                </form>

                <button
                    type="button"
                    onClick={() => loginByGithub()}
                    className="w-full bg-neutral-900 text-white rounded px-3 h-10 font-semibold text-sm hover:bg-neutral-950 cursor-pointer"
                >Github</button>

            </section>
        </FormProvider>
    )
}

export default LoginForm;