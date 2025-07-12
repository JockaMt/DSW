import Image from 'next/image';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { Input } from '../ui/input';
import { FaCartShopping } from 'react-icons/fa6';

const Header = () => {
    return (
        <header className="bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex w-full items-center justify-between">
                        <Link href="/" className="flex items-center flex-shrink-0">
                            <Image className='flex w-30' src="/logo-white.webp" alt="Logo" width={500} height={500} />
                        </Link>
                        <div className="absolute pointer-events-none left-0 flex w-full h-10 items-center justify-center">
                            <Input type="text" placeholder="Pesquisar..." className="absolute pointer-events-auto translate-x-[] bg-accent w-1/3" />
                        </div>
                        <nav className="ml-10 flex items-baseline space-x-4">
                            <Link href="/my-cart" className="text-white duration-150 hover:text-white/50 hover:scale-110 px-3 py-2 rounded-md text-sm font-medium">
                                <FaCartShopping className="h-6 w-6" />
                            </Link>
                            <Link href="/account" className="text-white duration-150 hover:text-white/50 hover:scale-110 px-3 py-2 rounded-md text-sm font-medium">
                                <FaUserCircle className="h-6 w-6" />
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;