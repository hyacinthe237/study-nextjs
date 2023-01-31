import Image from 'next/image';
import Link from 'next/link'

function HomePage({data}) {
    return (
        <div className='container mt-10'>
            {data?.map(ev => <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-10" key={ev.id}>
                <Link href={`/events/${ev.id}`} passHref>
                    <div className="md:flex">
                        <div className="md:shrink-0">
                            <Image src={ev.image} width={200} height={200} alt={ ev.title } className="h-48 w-full object-cover md:h-full md:w-48" />
                        </div>

                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{ ev.title }</div>
                            <p className="mt-2 text-slate-500">{ ev.description }</p>
                        </div>
                    </div>
                </Link></div>
            )}
        </div>
    );
}

export default HomePage;