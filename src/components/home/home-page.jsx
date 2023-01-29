import Image from 'next/image';
import Link from 'next/link'

function HomePage({data}) {
    return (
        <div className='container mt-10'>
            {data?.map(ev => <div class="columns-2 mb-4" key={ev.id}><Link href={`/events/${ev.id}`} passHref>
                <Image src={ev.image} width={300} height={300} alt={ ev.title } className='w-full aspect-video' />
                <h2 class="font-bold text-4xl">{ ev.title }</h2>
                <p class="mt-3 text-2xl text-justify">{ ev.description }</p>
            </Link></div>
            )}
        </div>
    );
}

export default HomePage;