import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
    username: string;
    password: string;
}

export async function POST(request: Request) {
    const body: RequestBody = await request.json()

    const user = await prisma.user.findFirst({
        where: {
            email: body.username
        }
    });
    
    if (user && (await bcrypt.compare(body.password, user.password))) {
        const { password, ...userWithouPass } = user;
        return new Response(JSON.stringify(userWithouPass));
    } else return new Response(JSON.stringify(null));
}