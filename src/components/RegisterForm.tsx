"use client"

import React from 'react'
import Input from './Input'
import { FormProvider, useForm } from 'react-hook-form'
import { SchemaTypeProps } from '@/@types'
import { registerUser } from '@/services'
import { signIn } from 'next-auth/react'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { ErrorMessage } from './ErrorMessage'
import { zodSchema } from '@/zod'
import { zodResolver } from '@hookform/resolvers/zod'

const RegisterForm = () => {
    const methods = useForm<SchemaTypeProps>({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: zodResolver(zodSchema)
    });

    const router = useRouter()

    const userRegisterSubmit = async (data: SchemaTypeProps) => {
        const { response, error } = await registerUser(data)

        if (response) {
            toast.success(response.message.toString())
            methods.reset()
            router.push('/')
        } else {
            toast.error(error.toString())
        }
    }

    const loginByGithub = () => {
        signIn("github", { callbackUrl: '/' })
        toast.success('Usuário registrado com sucesso!')
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
                    <ErrorMessage field='username' />

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

                    <Input
                        label='Confirme sua senha'
                        name='confirmPassword'
                        type='password'
                        placeholder='******'
                    />
                    <ErrorMessage field='confirmPassword' />

                    <input className="bg-violet-500 text-white rounded px-3 h-10 font-semibold text-sm hover:bg-violet-600 cursor-pointer" type="submit" value="Registrar" />
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

export default RegisterForm;