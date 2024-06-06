import { ModeToggle } from "@/components/toggle";
import { Button } from "../components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"

export default function Home() {
    return (
        <main className="items-center">

            {/**Header**/}

            <nav className="grid grid-cols-3 items-center mt-4">
                <div className="mr-4"></div>
                <h1 className="text-center text-2xl font-bold">Home Page</h1>
                <div className="space-x-4 mr-4 justify-self-end">
                        <Button asChild className="px-4 py-2 z-20 bg-blue-400 rounded-md text-white relative font-semibold font-sans
                        after:-z-20 after:absolute after:h-1 after:w-1 after:bg-blue-800 after:left-3 overflow-hidden after:bottom-0
                        after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all
                        after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700
                        [text-shadow:1px_2px_1px_#1512BE;] hover:[text-shadow:1px_1px_1px_#B7B5F3] text-lg">
                            <Link href="/login-page">Login</Link>
                        </Button>

                        <Button asChild className="px-4 py-2 z-30 bg-blue-400 rounded-md text-white relative font-semibold font-sans
                        after:-z-20 after:absolute after:h-1 after:w-1 after:bg-blue-800 after:left-3 overflow-hidden after:bottom-0
                        after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all
                        after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700
                        [text-shadow:1px_2px_1px_#1512BE;] hover:[text-shadow:1px_1px_1px_#B7B5F3] text-lg">
                            <Link href="/register">Cadastrar</Link>
                        </Button>

                    <ModeToggle />
                </div>
            </nav>

            {/**Header**/}

            <div className="grid grid-cols-2 space-x-4 mt-12 mx-4">
                <div className="relative overflow-hidden w-90 h-60 rounded-3xl cursor-pointer text-2xl font-bold bg-blue-400">
                    <div className="z-50 absolute w-full h-full peer">
                    </div>

                    <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-sky-700 transition-all duration-500">
                    </div>
                    <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center
                        peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-60 -right-40 w-36 h-90 rounded-full bg-sky-700 transition-all duration-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                        Sed nonummy libero ac urna. Nulla facilisi.<br />
                        Praesent id justo in risus bibendum placerat. Pellentesque habitant<br />
                        morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br />
                        - FATEC Cruzeiro -
                    </div>
                    <div className="w-full h-full items-center justify-center flex uppercase">
                        Plotter de desenho CNC
                    </div>
                </div>

                <div className="relative overflow-hidden w-90 h-60 rounded-3xl cursor-pointer text-2xl font-bold bg-blue-400">
                    <div className="z-50 absolute w-full h-full peer">
                    </div>

                    <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-sky-700 transition-all duration-500">
                    </div>
                    <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center
                        peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-60 -right-40 w-36 h-90 rounded-full bg-sky-700 transition-all duration-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                        Sed nonummy libero ac urna. Nulla facilisi.<br />
                        Praesent id justo in risus bibendum placerat. Pellentesque habitant<br />
                        morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br />
                        - FATEC Cruzeiro -
                    </div>
                    <div className="w-full h-full items-center justify-center flex uppercase">
                        Plotter de desenho CNC
                    </div>
                </div>

                <Image
                    src="/plotter.jpg"
                    width={900}
                    height={1100}
                    alt="não foi"
                    className="my-4 rounded" />

            </div>

            <div>
                <Button className="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900
                          duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300
                          relative bg-neutral-900 px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12
                          after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse ml-8 mt-4">
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
            </div>
        </main>
    );
}
