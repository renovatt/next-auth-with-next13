export { default } from "next-auth/middleware"

export const config = {
    matcher: [
        "/privateRouterOne/:path*",
        "/privateRouterTwo/:path*"
    ]
}