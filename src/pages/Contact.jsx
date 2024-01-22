import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import FacebookIcon from "../assets/images/facebook.png"
import InstagramIcon from "../assets/images/instagram.png"
import TreadsIcon from "../assets/images/threads.png"
import XIcon from "../assets/images/twitterpng.png"

const Contact = () => {
    return (
        <div className="contact">
            <Header/>
            <Navigation/>
            <section>
                <h2>Contactez-moi</h2>
                <div className="network-social">
                    <h3>Réseaux sociaux :</h3>
                    <a href="https://www.facebook.com/gugux.feu" target="_blank" rel="noopener noreferrer">
                        <img src={FacebookIcon} alt="Contacte moi sur facebook" />
                    </a>
                    <a href="https://www.instagram.com/mr_paul59/" target="_blank" rel="noopener noreferrer">
                        <img src={InstagramIcon} alt="Contacte moi sur instagram" />
                    </a>
                    <a href="https://www.threads.net/@mr_paul59" target="_blank" rel="noopener noreferrer">
                        <img src={TreadsIcon} alt="Contacte moi sur treads" />
                    </a>
                    <a href="https://twitter.com/MrRaccoon59" target="_blank" rel="noopener noreferrer">
                        <img src={XIcon} alt="Contacte moi sur x" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Contact;