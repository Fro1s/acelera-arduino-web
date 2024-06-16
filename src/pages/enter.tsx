import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Enter() {
    return (
            <main className="w-full h-full flex flex-col p-4">

            <header className="absolute right-0 mr-4">
                <Button asChild className='bg-neutral-900 text-white'>
                    <Link href="/cards">Cartões Cadastrados</Link>
                </Button>
            </header>

            <div className="w-full max-w-sm mx-auto mt-4 flex flex-col gap-4">
                <div className="shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-2">Fechadura com RFID</h2>
                    <p className="text-white">
                        Este projeto consiste em uma fechadura eletrônica que utiliza tecnologia RFID (Identificação por Radiofrequência) para conceder ou negar acesso. Utilizando um leitor RFID e tags RFID, a fechadura verifica se o cartão ou chaveiro apresentado é válido e, se for, destrava a porta.
                    </p>
                    <Image
                        src="/WhatsApp Image 2024-06-13 at 09.16.07.jpeg "
                        width={800}
                        height={1200}
                        alt="não foi"
                        className="my-4 h-full"
                    />
                    
                </div>
                <div className="shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-2">Plotter de Desenho</h2>
                    <p className="text-white">
                        O plotter de desenho é um dispositivo que desenha imagens em papel usando uma caneta. Este projeto envolve a construção de um plotter controlado por um microcontrolador que interpreta comandos de desenho e movimenta a caneta sobre o papel para criar gráficos e textos com precisão.
                    </p>
                    <Image
                        src="/WhatsApp Image 2024-06-13 at 09.16.07 (1).jpeg"
                        width={800}
                        height={1200}
                        alt="não foi"
                        className="my-4 h-full"
                    />
                </div>
            </div>
        </main>
    );
}
