import { ModeToggle } from "@/components/toggle";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      alert('Login realizado com sucesso!');
    } else {
      // Trate o erro
    }
  };


return (
  <main className="items-center">
    <header className="grid grid-cols-3 items-center mt-3">
      <div className="space-x-4 mr-4 justifi-self-start">
        <Link href="/">
          <button className="cursor-pointer duration-200 hover:scale-125 active:scale-100" title="Voltar">
            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-blue-500">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
            </svg>
          </button>
        </Link>
      </div>

      <div className="mr-4"></div>
      <div className="space-x-4 mr-4 justify-self-end">
        <ModeToggle />
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

        <form method="POST" onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input placeholder="john@example.com"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent
                                placeholder-transparent focus:outline-none focus:border-purple-500"
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="email"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all
                                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                                peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm">
              Endereço de email
            </label>
          </div>
          <div className="relative">
            <input className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent
                                placeholder-transparent focus:outline-none focus:border-purple-500"
              placeholder="Senha"
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="password"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all
                          peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                          peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500
                          peer-focus:text-sm">
              Senha
            </label>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-200">
              <input className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
                type="checkbox"
              />
              <span className="ml-2">Lembre-me</span>
            </label>

            <a className="text-sm text-blue-200 hover:underline" href="#">
              Esqueceu a senha?
            </a>
          </div>

          <Button asChild className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded-md shadow-lg text-white
                           font-semibold transition duration-200"
            type="submit">
            <Link href="/enter">Entrar</Link>
          </Button>
        </form>

        <div className="text-center text-gray-300">
          Não tem uma conta?
        </div>
        <div className="text-center">
          <a className="text-blue-300  hover:underline" href="register">
            Cadastre-se
          </a>
        </div>
      </div>
    </header>
  </main>
);
};
export default Login;
