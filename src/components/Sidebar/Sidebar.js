import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <Link to={`/course/1`}><p>1. Reading Exercises the Brain</p></Link>
            <Link to={`/course/2`}><p>2. Reading is a Form of (free) Entertainment</p></Link>
            <Link to={`/course/3`}><p>3. Reading Improves Concentration and the Ability to Focus</p></Link>
            <Link to={`/course/4`}><p>4. Reading Improves Literacy</p></Link>
            <Link to={`/course/5`}><p>5. Reading Improves Sleep</p></Link>
            <Link to={`/course/6`}><p>6. Reading Increases General Knowledge</p></Link>
        </div>
    );
};

export default Sidebar;