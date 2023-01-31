import SingleEvent from '../../../src/components/events/single-event';


function SingleEventPage({data}) {
    return (<SingleEvent data={data} />);
}
// const SingleEventPage = ({ data }) =>

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