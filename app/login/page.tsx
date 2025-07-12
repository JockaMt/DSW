import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaArrowLeft, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
    return (
        <div className="flex bg-accent items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <form action="" className="flex bg-card p-4 rounded-md w-full max-w-96 flex-col h-full items-center justify-center gap-8">
                <div className="flex flex-col w-full h-full gap-4">
                    <Link className="flex items-center gap-2 absolute pt-3 text-primary" href="/"><FaArrowLeft/> Voltar</Link>
                    <h2 className="flex w-full p-2 justify-center text-2xl font-medium">Entrar</h2>
                    <Input type="text" placeholder="Username" className="w-full" />
                    <Input type="password" placeholder="Password" className="w-full" />
                    <Button type="submit" className="w-full">Entrar</Button>
                    <Button variant="secondary" className="w-full">Cadastrar-se</Button>
                    <Button variant="secondary" className="w-full"><FaGoogle/>Entrar com google</Button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;