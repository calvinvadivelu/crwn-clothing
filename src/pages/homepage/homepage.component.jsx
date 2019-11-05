import React from 'react';
import './homepage.styling.scss';
import Directory from '../../components/directory/directory.component'

const Homepage = () => {
    return (
        <div className="homepage">
            <Directory/>
        </div>
    );
}

export default Homepage;