import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="items-center">
            <header className="grid grid-cols-3 items-center mt-4">
                <div className="mr-4"></div>
                <h1 className="text-center text-2xl font-bold">Home Page</h1>
                <div className="space-x-4 mr-4 justify-self-end">
                    <Link href="/login-page">
                        <Button>
                            Fazer Login
                        </Button>
                    </Link>

                    <Link href="/register">
                        <Button>
                            Fazer Cadastro
                        </Button>
                    </Link>
                </div>
            </header>
        </main>
    );
}
