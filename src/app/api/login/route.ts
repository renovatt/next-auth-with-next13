import { signJwtAcessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
    email: string;
    password: string;
}

export async function POST(request: Request) {
    const body: RequestBody = await request.json()
    // console.log(request)

    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
        },
    });

    // if (!user) throw new Error("Usuário não encontrado.");

    if (user && (await bcrypt.compare(body.password, user.password))) {
        const { password, ...userWithouPass } = user;
        const accessToken = signJwtAcessToken(userWithouPass)

        const result = {
            ...userWithouPass,
            accessToken
        }

        return new Response(JSON.stringify(result));
    } else return new Response(JSON.stringify(null));
}