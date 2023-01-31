import React from 'react'
import Image from 'next/image';

const SingleEvent = ({ data }) => {
    const onSubmit = () => {};
    return (
        <div className='container'>
            <Image src={data.image} width={1024} height={500} alt={data.title} />

            <h1 className='text-bold text-5xl uppercase'>{data.title}</h1>
            <p className='mb-10'>{data.description}</p>

            <form onSubmit={onSubmit}>
                <label></label>
                <input type="email" />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default SingleEvent;