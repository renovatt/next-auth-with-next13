import { UnauthorizedError } from "@/errors";
import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";

export async function GET(request: Request, { params }: { params: { id: number } }) {

    const accessToken = request.headers.get("authorization")

    if (!accessToken || !verifyJwt(accessToken)) throw new UnauthorizedError("Não autorizado!")

    const userPosts = await prisma.post.findMany({
        where: { authorId: String(params.id) },
        include: {
            author: {
                select: {
                    email: true,
                    username: true
                }
            }
        }
    });
    return new Response(JSON.stringify(userPosts));
}