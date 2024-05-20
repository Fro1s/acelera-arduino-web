import { ModeToggle } from "@/components/toggle";
import Link from "next/link";

export default function Register() {
  return (
    <main className="items-center">
      <header className="grid grid-cols-3 items-center mt-3">
          <div className="space-x-4 mr-4 justifi-self-start">
            <Link href="/index">
              <button className="cursor-pointer duration-200 hover:scale-125 active:scale-100" title="Voltar">
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-blue-500">
                  <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                </svg>
              </button>
            </Link>
          </div>

          <div className="mr-4"></div>
            <div className="space-x-4 mr-4 justify-self-end">
              <ModeToggle/>
            </div>

            <div className="mr-4 flex justify-center items-center mt-16"></div>
            <div style={{ animation: "slideInFromLeft 1s ease-out" }}
                 className="max-w-md w-full bg-gradient-to-r from-blue-900 to-blue-600 rounded-xl
                 shadow-2xl overflow-hidden p-8 space-y-8">

              <h2 style={{ animation: "appear 2s ease-out" }}
                    className="text-center text-4xl font-extrabold text-white">
                    Seja bem-vindo
              </h2>

              <p style={{ animation: "appear 3s ease-out" }} className="text-center text-gray-200">
                    Entre em sua conta
              </p>

              <form method="POST" action="#" className="space-y-6">
                <div className="relative">
                  <input placeholder="john@example.com"
                         className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent
                                    placeholder-transparent focus:outline-none focus:border-purple-500"
                         required=""
                         id="email"
                         name="email"
                         type="email"
                  />

                  <label htmlFor="email"
                         className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all
                                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                                    peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm">
                    Endereço de email
                  </label>
                </div>

                <div className="relative">
                  <input placeholder="Confirme seu email"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent
                              placeholder-transparent focus:outline-none focus:border-purple-500"
                    required=""
                    id="confirm-email"
                    name="confirm-email"
                    type="email"
                  />
                  <label htmlFor="confirm-email"
                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all
                              peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                              peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm">
                    Confirme seu email
                  </label>
                </div>

                <div className="relative">
                  <input className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent
                                    placeholder-transparent focus:outline-none focus:border-purple-500"
                    placeholder="Senha"
                   required=""
                   id="password"
                    name="password"
                    type="password"
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all
                                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                    peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500
                                    peer-focus:text-sm"
                         htmlFor="password">
                    Senha
                 </label>
                </div>

                <div className="relative">
                  <input className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent
                                    placeholder-transparent focus:outline-none focus:border-purple-500"
                         placeholder="Confirme sua senha"
                         required=""
                         id="confirm-password"
                         name="confirm-password"
                         type="password"
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all
                                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                    peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500
                                    peer-focus:text-sm"
                         htmlFor="confirm-password">
                          Confirme sua senha
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center text-sm text-gray-200">
                    <input className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
                      type="checkbox"
                    />
                    <span className="ml-2">Li e concordo com os </span>
                    <span style={{ marginLeft: '5px' }}></span>
                    <a className="text-blue-300  hover:underline" href="#">
                      Termos de Uso
                    </a>
                  </label>
                </div>

                <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded-md shadow-lg text-white
                               font-semibold transition duration-200"
                  type="submit">
                  Entrar
                </button>
              </form>

              <div className="text-center text-gray-300">
                Já possui uma conta?
              </div>
              <div className="text-center">
                <a className="text-blue-300  hover:underline" href="login-page">
                  Faça o Login
                </a>
              </div>
            </div>
        </header>
      </main>
  );
}