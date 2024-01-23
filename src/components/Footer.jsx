import React from 'react';
import FacebookIcon from "../assets/images/facebook.png";
import InstagramIcon from "../assets/images/instagram.png";
import TreadsIcon from "../assets/images/threads.png";
import LinkedinIcon from "../assets/images/linkedin.png";
import XIcon from "../assets/images/twitterpng.png";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <h2>Contactez-moi !</h2>
                <p>sur les réseaux</p>
                <p>ou sur</p>
                <p>paulallebee@gmail.com</p>
            </div>

            <div className="social-network">
                <div>
                    <a href="https://www.facebook.com/gugux.feu" target="_blank" rel="noopener noreferrer">
                        <img src={FacebookIcon} alt="Contacte moi sur facebook" />
                        <p>Facebook</p>
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/mr_paul59/" target="_blank" rel="noopener noreferrer">
                        <img src={InstagramIcon} alt="Contacte moi sur instagram" />
                        <p>Instagram</p>
                    </a>
                </div>
                <div>
                    <a href="https://www.threads.net/@mr_paul59" target="_blank" rel="noopener noreferrer">
                        <img src={TreadsIcon} alt="Contacte moi sur treads" />
                        <p>Treads</p>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/paulallebee/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedinIcon} alt="Contacte moi sur Linkedin" />
                        <p>Linkedin</p>
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com/MrRaccoon59" target="_blank" rel="noopener noreferrer">
                        <img src={XIcon} alt="Contacte moi sur x" />
                        <p>X</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;