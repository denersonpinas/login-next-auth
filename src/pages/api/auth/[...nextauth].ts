import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.PRODUTION_GOOGLE_ID ?? "",
      clientSecret: process.env.PRODUTION_GOOGLE_SECRET ?? ""
    }),
  ],
  secret: process.env.PRODUTION_SECRET ?? ""
})