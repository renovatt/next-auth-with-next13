import { zodSchema } from "@/zod";
import { z } from "zod";

export type SchemaTypeProps = z.infer<typeof zodSchema>

export type RegisterUserProps = {
    username: string;
    email: string;
    password: string;
}

export type LoginUserProps = {
    email: string;
    password: string;
}

export type InputProps = {
    name: string;
    label: string;
    type: string;
    placeholder: string;
}