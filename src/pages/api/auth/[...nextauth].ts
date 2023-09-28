import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.DEVELOPED_GOOGLE_ID ?? process.env.PRODUTION_GOOGLE_ID ?? "",
      clientSecret: process.env.DEVELOPED_GOOGLE_SECRET ?? process.env.PRODUTION_GOOGLE_SECRET ?? ""
    }),
  ],
  secret: process.env.DEVELOPED_SECRET ?? process.env.PRODUTION_SECRET ?? ""
})