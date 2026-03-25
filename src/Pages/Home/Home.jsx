import React from 'react';
import Bannar from '../../component/Banner/Bannar';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <div className='max-w-6xl mx-auto '>
            <Bannar></Bannar>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;