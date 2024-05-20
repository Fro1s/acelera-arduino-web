import { ModeToggle } from "@/components/toggle";
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="items-center">
            <header className="grid grid-cols-3 items-center mt-4">
                <div className="mr-4"></div>
                <h1 className="text-center text-2xl font-bold">Home Page</h1>
                <div className="space-x-4 mr-4 justify-self-end">
                    <Link href="/login-page">
                        <button className="px-4 py-2 z-20 bg-blue-400 rounded-md text-white relative font-semibold font-sans
                        after:-z-20 after:absolute after:h-1 after:w-1 after:bg-blue-800 after:left-3 overflow-hidden after:bottom-0
                        after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all
                        after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700
                        [text-shadow:1px_2px_1px_#1512BE;] hover:[text-shadow:1px_1px_1px_#B7B5F3] text-lg">
                            Login
                        </button>
                    </Link>

                    <Link href="/register">
                        <button className="px-4 py-2 z-30 bg-blue-400 rounded-md text-white relative font-semibold font-sans
                        after:-z-20 after:absolute after:h-1 after:w-1 after:bg-blue-800 after:left-3 overflow-hidden after:bottom-0
                        after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all
                        after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700
                        [text-shadow:1px_2px_1px_#1512BE;] hover:[text-shadow:1px_1px_1px_#B7B5F3] text-lg">
                            Cadastrar
                        </button>
                    </Link>

                    <ModeToggle/>

                </div>
            </header>
        </main>
    );
}
