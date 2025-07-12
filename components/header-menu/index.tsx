'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
    const pathname = usePathname();
    return (
        <header className="sticky top-0 bg-primary shadow-md">
            <nav>
                <ul className="flex justify-center items-center p-4 text-white">
                    <li><Link className="px-4 py-2 duration-150 hover:bg-accent rounded-md hover:text-primary" href={pathname == "/" ? "#" : "/"}>Início</Link></li>
                    <li><Link className="px-4 py-2 duration-150 hover:bg-accent rounded-md hover:text-primary" href={pathname == "/" ? "#" : "/"}>Promoções</Link></li>
                    <li><Link className="px-4 py-2 duration-150 hover:bg-accent rounded-md hover:text-primary" href={pathname == "/" ? "#" : "/"}>Produtos</Link></li>
                    <li><Link className="px-4 py-2 duration-150 hover:bg-accent rounded-md hover:text-primary" href={pathname == "/" ? "#" : "/"}>Contato</Link></li>
                    <li><Link className="px-4 py-2 duration-150 hover:bg-accent rounded-md hover:text-primary" href={pathname == "/" ? "#" : "/"}>Ajuda</Link></li>
                </ul>
            </nav>
        </header>
    )
};

export default HeaderMenu;