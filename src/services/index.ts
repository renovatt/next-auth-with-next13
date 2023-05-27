import { CredentialsTypeProps, RegisterSchemaTypeProps, LoginSchemaTypeProps } from "@/@types"

export const loginUser = async (data: CredentialsTypeProps | LoginSchemaTypeProps) => {
    try {
        const res = await fetch('http://localhost:3000/api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const json = await res.json()

        if (res.ok) {
            return { response: json }
        } else {
            throw new Error(json.error)
        }

    } catch (error: any) {
        return { error: error.message }
    }
}

export const registerUser = async (data: RegisterSchemaTypeProps) => {
    try {
        const res = await fetch('/api/user', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const json = await res.json()

        if (res.ok) {
            return { response: json }
        } else {
            throw new Error(json.error)
        }

    } catch (error: any) {
        return { error: error.message }
    }
}