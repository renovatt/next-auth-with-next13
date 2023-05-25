import { RegisterUserProps } from "@/@types"

export const registerUser = async (data: RegisterUserProps) => {
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