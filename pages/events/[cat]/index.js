import Link from "next/link";
import Image from "next/image";

function EventCatPage ({ data, pageName }) {
    return (
        <div className='container h-full'>
            <h1 className="text-2xl font-bold mb-3 mt-10">Event in { pageName }</h1>

            <div className="grid grid-cols-4">
                {data.map(ev => (
                    <div key={ev.id} class="mr-2 h-auto bg-slate-200 p-1 min-h-96 mb-4 rounded shadow-2xl"><Link href={`/events/${ev.city}/${ev.id}`} passHref>
                        <Image src={ev.image} width={300} height={200} alt={ev.title} className="mt-1 w-full min-h-min" />
                        <h2 className="font-bold mt-3">{ev.title}</h2>
                        <p class="text-justify">{ev.description}</p>
                    </Link></div>
                ))}
            </div>
        </div>
    );
}

export async function getStaticPaths () {
    const { events_categories } = await import('../../../data/data.json');
    const allPaths = events_categories.map(ev => {
        return { params: { cat: ev.id.toString() }  }
    })
    return {
        paths: allPaths,
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps (context) {
    const id = context?.params.cat;
    const { allEvents } = await import('../../../data/data.json');

    const data = allEvents.filter(ev => ev.city === id)
    return { props: { data, pageName: id } }
}

export default EventCatPage;