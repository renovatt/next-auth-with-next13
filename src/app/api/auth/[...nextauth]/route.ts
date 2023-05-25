import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email@gmail.com" },
                password: { label: "Password", type: "password", placeholder: "***" }
            },
            async authorize(credentials, req) {
                const url = process.env.URL;

                const res = await fetch(`${url}/api/login`, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password
                    })
                })

                const user = await res.json()

                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            return ({ ...token, ...user })
        },
        async session({ session, token }) {
            session.user = token as any;
            return session;
        }
    },
    pages: {
        signIn: "/login"
    }
});

export { handler as GET, handler as POST }