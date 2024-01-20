import React from 'react';

const Work = ({ post, compagny, informations, year }) => {
    return (
        <div className="work-item">
            <div className="bullet"></div>
            <div className="content">
                <h3>{post}</h3>
                <p>{compagny}</p>
                <ul>
                    {informations.map((info, index) => (
                        <li key={index}>{info}</li>
                    ))}
                </ul>
                <p>{year}</p>
            </div>
        </div>
    );
};

export default Work;