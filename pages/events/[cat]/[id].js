import Image from 'next/image';

function SingleEventPage({data}) {
    console.log(data)
    return (
        <div className='container'>
            <Image src={data.image} width={1024} height={500} alt={data.title} />

            <h1 className='text-bold text-5xl uppercase'>{data.title}</h1>
            <p className='mb-10'>{data.description}</p>
        </div>
    );
}

export async function getStaticPaths () {
    const {allEvents} = await import('../../../data/data.json');
    const allPaths = allEvents.map(path => {
        return {
            params: {
                cat: path.city,
                id: path.id,
            },
        };
    });

    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps (context) {
    const id = context.params.id;
    const {allEvents} = await import('../../../data/data.json');
    const eventData = allEvents.find(ev => id === ev.id)
    return {
        props: { data: eventData }
    }
}

export default SingleEventPage;