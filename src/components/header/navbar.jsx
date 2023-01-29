import Link from 'next/link'

function Navbar() {
    return (
        <nav class="flex justify-center space-x-4">
            <Link href='/' passHref className='font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>Home</Link>
            <Link href='/about' passHref className='font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>About</Link>
            <Link href='/blog' passHref className='font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>Blog</Link>
            <Link href='/events' passHref className='font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>Events</Link>
            <Link href='/contact' passHref className='font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>Contact</Link>
        </nav>
    );
}

export default Navbar;