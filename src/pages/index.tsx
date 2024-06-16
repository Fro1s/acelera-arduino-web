import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ModeToggle } from "@/components/toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Index() {
    return (
        <main className="w-full h-full flex items-center">
            <div className="w-[50vw]">
                <Carousel className="w-full h-full">
                    <CarouselContent className="">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem className="" key={index}>
                                <div className="p-1">
                                    <Card className="h-[100vh] bg-transparent shadow-none border-none w-full">
                                        <CardContent className="flex rounded aspect-square w-full h-full items-center justify-center p-6">
                                            <Image
                                                src="/WhatsApp Image 2024-06-13 at 09.16.07.jpeg"
                                                width={800}
                                                height={1200}
                                                alt="não foi"
                                                className="my-4 h-full"
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            <div className="absolute top-0 right-0 mt-4 mr-4">
                <ModeToggle />
            </div>

            <div className="w-[30vw] h-[90vh] ml-32 flex flex-col items-center justify-center">
                <Card className="bg-gradient-to-r from-blue-900 to-blue-600 shadow-md rounded-md w-full h-[100vh] flex flex-col items-center justify-center p-6">
                    <CardHeader>
                        <CardTitle>Bem-vindo!</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Estamos felizes em tê-lo conosco. Navegue pelo carrossel para ver as últimas novidades e clique nos botões abaixo para fazer login ou se registrar.
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4 w-full">
                        <Button asChild className="px-4 py-2 bg-neutral-900 rounded-md text-white font-semibold w-full">
                            <Link href="/login-page">Login</Link>
                        </Button>
                        <Button asChild className="px-4 py-2 bg-neutral-900 rounded-md text-white font-semibold w-full">
                            <Link href="/register">Cadastrar</Link>
                        </Button>
                        <Button className="group gap-2 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-10 py-4 border text-left text-gray-50 text-base font-bold rounded-lg overflow-hidden w-full">
                            <svg
                                className="size-6 fill-neutral-50"
                                height="100"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 100 100"
                                width="100"
                                x="0"
                                xmlns="http://www.w3.org/2000/svg"
                                y="0"
                            >
                                <path
                                    className="svg-fill-primary"
                                    d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z">
                                </path>
                            </svg>
                            Github
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </main>
    );
}
