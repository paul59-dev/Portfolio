import React from 'react';

const Formations = ({ title, institution, information, year }) => {
    return (
        <div className="formation-item">
            <div className="bullet"></div>
            <div className="content">
                <h3>{title}</h3>
                <p>{institution}</p>
                <p>{information}</p>
                <p>{year}</p>
            </div>
        </div>
    );
};

export default Formations;