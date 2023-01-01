import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='d-flex m-5'>
                {
                    data.map(topic => <div
                    key={topic.id}
                    className="border border-info m-2 p-2"
                    >
                        <p className='font-weight-bold'>Book Name: {topic.name}</p>
                        <p>Author: {topic.author}</p>
                        <Button>More Details</Button>
                    </div>)
                }
        </div>
    );
};

export default Course;