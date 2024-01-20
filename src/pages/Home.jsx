import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/data/project.json")
        .then((res) => setData(res.data))
        .catch((error) => {
            console.error('Erreur lors de la récupération des données:', error);
        });
    }, []);

    return (
        <div className="home">
            <Header />
            <Navigation />
            <section>
                <div className="grid-container">
                    {data.map((item, index) => (
                        <div key={index} className="card">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <p>{item.languages}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;