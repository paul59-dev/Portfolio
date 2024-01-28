import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
// Language
import html from '../assets/images/languages/html5.png';
import css from '../assets/images/languages/css-3.png';
import js from '../assets/images/languages/javascript.png';
import java from '../assets/images/languages/java.png';
import go from '../assets/images/languages/go.png';
import ruby from '../assets/images/languages/rubygems.png';
import php from '../assets/images/languages/php.png';
import python from '../assets/images/languages/python.png';
//Framewoks
import react from '../assets/images/frameworks/react.png';
import ror from '../assets/images/frameworks/ruby-on-rails.png';
import node from '../assets/images/frameworks/nodejs.png';
// OS
import windows from '../assets/images/systems/windows.png';
import linux from '../assets/images/systems/Linux.png';
import android from '../assets/images/systems/android.png';
// Other
import support from '../assets/images/otherSkills/support.webp';
import docker from '../assets/images/otherSkills/docker.png';
import cisco from '../assets/images/otherSkills/cisco.png';

const Skills = () => {
    const [language, setLanguage] = useState([]);
    const [framework, setFramework] = useState([]);
    const [system, setSystem] = useState([]);
    const [otherSkill, setOtherSkill] = useState([]);

    let languageArray = [html, css, js, java, go, ruby, php, python];
    let frameworkArray = [react, ror, node];
    let osArray = [windows, linux, android];
    let otherSkillArray = [support, docker, cisco];

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
                            <img src={languageArray[index]} alt={item.alt} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
                <h2>Frameworks</h2>
                <div className="grid-container">
                    {framework.map((item, index) => (
                        <div key={index} className="card">
                            <img src={frameworkArray[index]} alt={item.alt} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
                <h2>Systèmes d'exploitations</h2>
                <div className="grid-container">
                    {system.map((item, index) => (
                        <div key={index} className="card">
                            <img src={osArray[index]} alt={item.alt} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
                <h2>Autres compétences</h2>
                <div className="grid-container">
                    {otherSkill.map((item, index) => (
                        <div key={index} className="card">
                            <img src={otherSkillArray[index]} alt={item.alt} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </section> 
        </div>
    );
};

export default Skills;