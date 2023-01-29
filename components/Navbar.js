import Link from 'next/link'

function Navbar() {
    return (
        <nav>
            <Link href='/' passHref>Home</Link>
            <Link href='/about' passHref>About</Link>
            <Link href='/blog' passHref>Blog</Link>
            <Link href='/events' passHref>Events</Link>
            <Link href='/contact' passHref>Contact</Link>
        </nav>
    );
}

export default Navbar;