import React from 'react';
import './SectionTitle.css'

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='section-title'>
            <h2>{heading}</h2>
            <p>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;