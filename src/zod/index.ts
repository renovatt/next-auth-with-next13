import * as z from 'zod'

export const zodSchema = z.object({
    username: z.string().max(44, 'O nome é muito grande.').nonempty('Nome é obrigatório.'),
    email: z.string().email('Precisa ser um email válido.'),
    password: z.string().min(6, 'A senha precisa ter pelo menos 6 caracteres.'),
    confirmPassword: z.string()
})

    .refine(fields => fields.password === fields.confirmPassword, {
        path: ['confirmPassword'],
        message: 'As senhas não correspondem.'
    })

    .transform(fields => ({
        password: fields.password,
        confirmPassword: fields.confirmPassword,
        email: fields.email.toLocaleLowerCase(),
        username: fields.username.trim().split(' ').map(word => {
            return word[0].toLocaleUpperCase().concat(word.substring(1))
        }).join(' '),
    }))

