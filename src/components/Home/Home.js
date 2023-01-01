import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
 
    return (
        <div className='container p-5'>
           
            <p>
                1. Reading Exercises the Brain

                While reading, we have to remember different characters and settings that belong to a given story. Even if you enjoy reading a book in one sitting, you have to remember the details throughout the time you take to read the book. Therefore, reading is a workout for your brain that improves memory function. 
            </p>
            <p>
                2. Reading is a Form of (free) Entertainment

                Did you know that most of the popular TV shows and movies are based on books? So why not indulge in the original form of entertainment by immersing yourself in reading. Most importantly, it's free with your Markham Public Library card.
            </p>
            <p>
            3. Reading Improves Concentration and the Ability to Focus

                We can all agree that reading cannot happen without focus and in order to fully understand the story, we have to concentrate on each page that we read. In a world where gadgets are only getting faster and shortening our attention span, we need to constantly practice concentration and focus. Reading is one of the few activities that requires your undivided attention, therefore, improving your ability to concentrate.
            </p>
            <Link className='btn btn-info' to={'/course'}>Our Courses</Link>
            
        </div>
    );
};

export default Home;