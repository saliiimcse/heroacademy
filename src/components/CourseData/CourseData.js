import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { jsPDF } from "jspdf";
import { Button } from 'react-bootstrap';

const CourseData = () => {
    const bookData = useLoaderData();

    const generatePdf = () =>{
        var doc = new jsPDF("p","pt","a4");
        doc.html(document.querySelector('#book'),{
            callback: function(pdf){
                pdf.save("assignment.pdf");
            }
        })
    }

    return (
        <div className='container m-5'>
            <h3>Book Details</h3>
            <Button className='btn btn-success float-right' onClick={generatePdf}>Download PDF</Button>
            
            {
                bookData.map(data => <div
                id='book'
                key={data.id}
                >
                    <p className='font-weight-bold'>Book Name: {data.name}</p>
                    <p>Author: {data.author}</p>
                    <img src={data.img} alt="..." className="w-50 h-30"/>
                </div>)
            }
        </div>
    );
};

export default CourseData;