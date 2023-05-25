"use client"

import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { LoginUserProps } from '@/@types'
import Input from '@/components/Input'
import { signIn } from 'next-auth/react'

const LoginForm = () => {
    const methods = useForm<LoginUserProps>({
        mode: 'all',
        reValidateMode: 'onChange',
    });

    const userRegisterSubmit = async (data: LoginUserProps) => {
        await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: true,
            callbackUrl: '/'
        })
    }

    return (
        <FormProvider {...methods}>
            <section className="flex justify-center items-center flex-col gap-4 w-full bg-gradient-to-b from-white to-gray-200 shadow max-w-xs border p-2 rounded">
                <h1 className="text-2xl text-violet-500 text-center">Fazer Login</h1>
                <form className="flex flex-col gap-4 mt-2 w-full max-w-xs"
                    onSubmit={methods.handleSubmit(userRegisterSubmit)}>
                    <Input
                        label='E-mail'
                        name='email'
                        type='email'
                        placeholder='joao@gmail.com'
                    />

                    <Input
                        label='Senha'
                        name='password'
                        type='password'
                        placeholder='***'
                    />

                    <input className="bg-violet-500 text-white rounded px-3 h-10 font-semibold text-sm hover:bg-violet-600 cursor-pointer" type="submit" value="Fazer Login" />
                </form>

                <button
                    type="button"
                    onClick={() => signIn("github", { callbackUrl: "/" })}
                    className="w-full bg-neutral-900 text-white rounded px-3 h-10 font-semibold text-sm hover:bg-neutral-950 cursor-pointer"
                >Github</button>

            </section>
        </FormProvider>
    )
}

export default LoginForm;