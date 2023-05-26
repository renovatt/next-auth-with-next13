export { default } from "next-auth/middleware"

export const config = {
    matcher: [
        "/userPost/:path*",
        "/anotherPrivateRouter/:path*"
    ]
}