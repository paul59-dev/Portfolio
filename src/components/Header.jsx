import React from 'react';
import ImagePP from '../assets/images/Paul.jpg'

const Header = () => {
    return (
        <div className="header">
            <div className="pp">
                <img src={ImagePP} alt="Photos de profil" />
                <p>Paul Allebée</p>
            </div>
            <div className="information">
                <div>
                    <p>4</p>
                    <p>Projets</p>
                </div>
                <div>
                    <p>4</p>
                    <p>Mois en entreprise</p>
                </div>
                <div>
                    <p>20</p>
                    <p>Compétences</p>
                </div>
            </div>
        </div>
    );
};

export default Header;