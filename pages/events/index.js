import Link from "next/link";
import Image from "next/image";

function EventsPage ({ data }) {
    return (
        <div className='container'>
            <h1 className="text-4xl mb-10 mt-10">Events Page</h1>
            <div className="grid grid-flow-col auto-cols-max">
                {data?.map(ev => <div key={ev.id} className="mr-1"><Link href={`/events/${ev.id}`} passHref>
                    <Image src={ev.image} width={300} height={300} alt={ev.title} className="max-h-52" />
                    <h2 className="mt-4 text-2xl font-bold">{ev.title}</h2>
                    </Link></div>
                )}
            </div>
        </div>
    );
}

export async function getStaticProps () {
    const { events_categories } = await import('../../data/data.json');
    return { props: { data: events_categories } }
}

export default EventsPage;