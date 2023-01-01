import { Button, Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import { jsPDF } from "jspdf";

const Course = () => {
    const data = useLoaderData();
    const generatePdf = () =>{
        var doc = new jsPDF("p","pt","a4");
        doc.html(document.querySelector('#bookData'),{
            callback: function(pdf){
                pdf.save("assignment.pdf");
            }
        })
    }

    // console.log(data);
    return (
        <Row>
            <Button onClick={generatePdf}>Download Pdf</Button>
            <Col className='p-5'>
                <Sidebar></Sidebar>
            </Col>
            <Col id='bookData'>
            <div className='m-5'>
                {
                    data.map(topic => <div
                    key={topic.id}
                    className="border border-info m-2 p-2"
                    >
                        <p className='font-weight-bold'>Book Name: {topic.name}</p>
                        <p>Author: {topic.author}</p>
                        <Link to={`/course/${topic.id}`}>More Details</Link>
                    </div>)
                }
             </div>
            </Col>
        </Row>
    );
};

export default Course;