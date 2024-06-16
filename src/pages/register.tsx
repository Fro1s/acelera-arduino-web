import { ModeToggle } from "@/components/toggle";
import { BadgeCheck, BadgeCheckIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from 'react';
import Modal from 'react-modal';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sucessModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [errorModalIsOpen, setErrorModalIsOpen] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (email !== confirmEmail) {
      alert('Os emails não correspondem.');
      return;
    }

    if (password !== confirmPassword) {
      alert('As senhas não correspondem.');
      return;
    }

    console.log(process.env.NEXT_PUBLIC_API_URL);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });

    const data = await response.json();


    if (response.ok) {
      setSuccessModalIsOpen(true);
    } else {
      setErrorModalIsOpen(true);
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
            Cadastre sua conta
          </p>

          <form method="POST" action="#" className="space-y-6" onSubmit={handleSubmit}>

            <div className="relative">
              <input
                placeholder="Nome"
                className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm">
                Nome
              </label>
            </div>

            <div className="relative">
              <input
                placeholder="john@example.com"
                className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm">
                Endereço de email
              </label>
            </div>

            <div className="relative">
              <input
                placeholder="Confirme seu email"
                className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                id="confirm-email"
                name="confirm-email"
                type="email"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
              />
              <label htmlFor="confirm-email" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm">
                Confirme seu email
              </label>
            </div>

            <div className="relative">
              <input
                className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                placeholder="Senha"
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm" htmlFor="password">
                Senha
              </label>
            </div>

            <div className="relative">
              <input
                className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                placeholder="Confirme sua senha"
                id="confirm-password"
                name="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm" htmlFor="confirm-password">
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
              Cadastrar
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

      <div id="login_sucess" tabIndex={-1} className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${sucessModalIsOpen ? '' : 'hidden'}`}>
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relativ rounded-lg shadow bg-gradient-to-r bg-black  ">
            <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="login_sucess" onClick={() => setSuccessModalIsOpen(false)}>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 bg-zinc-900 rounded-md text-center">
              <BadgeCheckIcon className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Cadastro realizado com sucesso!</h3>
              <button data-modal-hide="login_sucess" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center" onClick={() => setSuccessModalIsOpen(false)}>
                <Link href="/login-page">Fazer Login</Link>
              </button>
              <button data-modal-hide="login_sucess" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => setSuccessModalIsOpen(false)}>
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="login_error" tabIndex={-1} className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${errorModalIsOpen ? '' : 'hidden'}`}>
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="login_error" onClick={() => setErrorModalIsOpen(false)}>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Erro ao realizar cadastro</h3>
              <button data-modal-hide="login_error" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center" onClick={() => setErrorModalIsOpen(false)}>
                Tentar Novamente
              </button>
              <button data-modal-hide="login_error" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => setErrorModalIsOpen(false)}>
                <a href="/">Sair</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main >
  );

};

export default Register;