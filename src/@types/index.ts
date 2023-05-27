import { z } from "zod";
import { loginSchema, registerSchema } from "@/zod";

type CredentialKeys = "email" | "password";

export type RegisterSchemaTypeProps = z.infer<typeof registerSchema>;
export type LoginSchemaTypeProps = z.infer<typeof loginSchema>;
export type CredentialsTypeProps = Record<CredentialKeys, string> | undefined;

export type InputProps = {
    name: string;
    label: string;
    type: string;
    placeholder: string;
}

export type ErrorMessageProps = {
    field: string
}