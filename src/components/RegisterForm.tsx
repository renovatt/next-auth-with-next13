"use client"

import React from 'react'
import Input from './Input'
import { FormProvider, useForm } from 'react-hook-form'
import { RegisterUserProps } from '@/@types'
import { registerUser } from '@/services'
import { signIn } from 'next-auth/react'

const RegisterForm = () => {
    const methods = useForm<RegisterUserProps>({
        mode: 'all',
        reValidateMode: 'onChange',
    });

    const userRegisterSubmit = async (data: RegisterUserProps) => {
        const { response, error } = await registerUser(data)
        console.log(data)
        if (response) {
            console.log("ok: ", response)
            methods.reset()
        } else {
            console.log("error: ", error)
        }
    }

    return (
        <FormProvider {...methods}>
            <section className="flex flex-col gap-4 w-full bg-gradient-to-b from-white to-gray-200 shadow max-w-xs border p-2 rounded">
                <h1 className="text-2xl text-violet-500 text-center">Faça seu registro agora</h1>
                <form className="flex flex-col gap-4 mt-2 w-full max-w-xs"
                    onSubmit={methods.handleSubmit(userRegisterSubmit)}>
                    <Input
                        label='Nome'
                        name='username'
                        type='text'
                        placeholder='João'
                    />

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

                    <input className="bg-violet-500 text-white rounded px-3 h-10 font-semibold text-sm hover:bg-violet-600 cursor-pointer" type="submit" value="Registrar" />
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

export default RegisterForm;