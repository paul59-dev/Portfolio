import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Formations from '../components/Formations';
import Work from '../components/Work';

const About = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/data/workInformation.json")
        .then((res) => setData(res.data))
        .catch((error) => {
            console.error('Erreur lors de la récupération des données:', error);
        });
    }, []);
    return (
        <div className="about">
            <Header />
            <Navigation />
            <section>
                <h2>Formations</h2>
                <div className="formations">
                    <Formations title="RNCP niveau 6 CDNT" institution="Aston By SQLI" information="Le titre RNCP au niveau CDNT certifie les compétences du professionnel en tant que Concepteur Développeur de Nouvelles Technologies, démontrant ainsi son expertise dans la création et le développement de solutions innovantes." year="2023 - 2025" />
                    <Formations title="BTS SNIR Option A" institution="Lycée de l'Europe" information="Le BTS SNIR, Systèmes Numériques en Informatique et Réseaux, prépare les étudiants à devenir des professionnels compétents dans la conception et le développement de systèmes informatiques et réseaux, offrant ainsi une expertise pointue dans les nouvelles technologies." year="2021 - 2023" />
                    <Formations title="BAC STI2D Option SIN" institution="Lycée de l'Europe" information="Le bac STI2D avec l'option SIN (Systèmes d'Information et Numérique) propose une spécialisation approfondie dans les technologies de l'information et du numérique, offrant aux étudiants une expertise pointue dans la conception et la gestion des systèmes d'information." year="2018 - 2021" />
                </div>
                <h2>Expériences professionnelles</h2>
                <div className="works">
                    {data.map((item, index) => (
                        <Work 
                            post={item.post} 
                            compagny={item.company}
                            informations={item.listOfInformations} 
                            year={item.year}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;