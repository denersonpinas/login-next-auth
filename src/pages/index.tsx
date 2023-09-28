import { GetServerSideProps } from 'next'
import { useSession, signIn, signOut } from "next-auth/react"

import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image'
import logo from '../images/logo.png'

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="shadow-black shadow-2xl rounded-md py-24 sm:py-32">
        <div className="w-full flex flex-col gap-12 items-center justify-center max-w-7xl px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image className="mx-auto h-20 w-auto" src={logo} alt='Your Company' width={750} height={750} />
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Seja Bem-Vindo {session.user?.name ?? ""}!
            </h2>
          </div>
          <div className="w-80 flex flex-1 items-center gap-6">
            <Image className="h-16 w-16 rounded-full" src={session.user?.image ?? ""} alt="" width={60} height={60} />
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{session.user?.name ?? ""}</h3>
              <p className="text-sm font-semibold leading-6 text-blue-500">{session.user?.email ?? ""}</p>
            </div>
          </div>
          <button
            onClick={() => signOut()}
            className="flex w-full justify-center rounded-md bg-blue-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
          >
            Sair
          </button>
        </div>
      </div>
    )
  }
  return (
    <section className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 shadow-md lg:px-8">
      <div className="flex min-h-full w-2/4 flex-1 flex-col justify-center p-4 shadow-black shadow-2xl rounded-md lg:p-4">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image className="mx-auto h-20 w-auto" src={logo} alt='Your Company' width={750} height={750} />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Iniciar sessão na sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                E-mail
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Senha
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-blue-500 hover:text-blue-600">
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className='w-full flex flex-col gap-3'>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
              >
                Entrar
              </button>
              <button
                onClick={() => signIn()}
                className="flex w-full justify-center gap-4 rounded-md bg-blue-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
              >
                <FcGoogle size={24} />
                Entrar com o Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )


}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


  return {
    props: {

    }
  }
}