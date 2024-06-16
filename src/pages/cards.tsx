import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface Card {
    uuid: string;
}

export default function Cards() {
    const [cards, setCards] = useState<Card[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchCards() {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/arduino');
                if (!response.ok) {
                    throw new Error('Erro ao buscar dados da API');
                }
                const data: Card[] = await response.json();
                setCards(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchCards();
    }, []);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Erro: {error}</p>;
    }

    return (
        <main className="w-full h-full flex flex-col p-4">

            <div className="absolute left-0 ml-4">
                <Button asChild className='bg-neutral-900 text-white'>
                    <Link href="/enter">Voltar</Link>
                </Button>
            </div>

            <div>
                <table className="min-w-full mt-16 divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 bg-neutral-900 text-left text-xs font-medium text-white uppercase tracking-wider">
                                UUID do Cartão
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y bg-white divide-gray-200">
                        {cards.map((card) => (
                            <tr key={card.uuid}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                                    {card.uuid}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
