"use client"

import React from 'react'
import Input from './Input'
import { FormProvider, useForm } from 'react-hook-form'
import { RegisterUserProps } from '@/@types'
import { registerUser } from '@/services'

const Form = () => {
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
            <section className="flex flex-col gap-4 w-full max-w-xs">
                <h1 className="text-3xl text-center">Faça seu registro agora</h1>
                <form className="flex flex-col gap-4 w-full max-w-xs"
                    onSubmit={methods.handleSubmit(userRegisterSubmit)}>
                    <Input
                        label='Nome'
                        name='name'
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
            </section>
        </FormProvider>
    )
}

export default Form;