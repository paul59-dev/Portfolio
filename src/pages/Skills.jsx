import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Skills = () => {
    const [language, setLanguage] = useState([]);
    const [framework, setFramework] = useState([]);
    const [system, setSystem] = useState([]);
    const [otherSkill, setOtherSkill] = useState([]);

    useEffect(() => {
        axios.get("/data/language.json")
        .then((res) => setLanguage(res.data))
        .catch((error) => {
            console.error('Erreur lors de la récupération des données:', error);
        });
    }, []);

    useEffect(() => {
        axios.get("/data/frameworks.json")
        .then((res) => setFramework(res.data))
        .catch((error) => {
            console.error('Erreur lors de la récupération des données:', error);
        });
    }, []);

    useEffect(() => {
        axios.get("/data/system.json")
        .then((res) => setSystem(res.data))
        .catch((error) => {
            console.error('Erreur lors de la récupération des données:', error);
        });
    }, []);

    useEffect(() => {
        axios.get("/data/otherSkills.json")
        .then((res) => setOtherSkill(res.data))
        .catch((error) => {
            console.error('Erreur lors de la récupération des données:', error);
        });
    }, []);
    return (
        <div className="skills">
            <Header/>
            <Navigation/>
            <section>
                <h2>Langages de programmations</h2>
                <div className="grid-container">
                    {language.map((item, index) => (
                        <div key={index} className="card">
                            <img src={item.image} alt={item.alt} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
                <h2>Frameworks</h2>
                <div className="grid-container">
                    {framework.map((item, index) => (
                        <div key={index} className="card">
                            <img src={item.image} alt={item.alt} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
                <h2>Systèmes d'exploitations</h2>
                <div className="grid-container">
                    {system.map((item, index) => (
                        <div key={index} className="card">
                            <img src={item.image} alt={item.alt} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
                <h2>Autres compétences</h2>
                <div className="grid-container">
                    {otherSkill.map((item, index) => (
                        <div key={index} className="card">
                            <img src={item.image} alt={item.alt} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </section> 
        </div>
    );
};

export default Skills;