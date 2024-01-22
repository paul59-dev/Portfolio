import React from 'react';
import ImagePP from '../assets/images/Paul.jpg'
import IconGithub from '../assets/images/github-mark.svg'

const Header = () => {
    return (
        <div className="header">
            <div className="first-row">
                <div className="pp">
                    <img src={ImagePP} alt="Photos de profil" />
                </div>
                <div className="information">
                    <div>
                        <p>12</p>
                        <p>Projets</p>
                    </div>
                    <div>
                        <p>4</p>
                        <p>Mois en entreprise</p>
                    </div>
                    <div>
                        <p>+17</p>
                        <p>Compétences</p>
                    </div>
                </div>
            </div>
            <div className="second-row">
                <p>Paul Allebée</p>
                <div className="subtitle">
                    <p>Développeur web</p>
                    <a href="https://github.com/paul59-dev" target="_blank" rel="noopener noreferrer">
                        <img src={IconGithub} alt="lien pour du github"/>
                        <p>Github</p>
                    </a>
                </div>
            </div>
            <div className="profile">
                <p>Je suis un étudiant en développement web plus précisément en Concepteur Développeur de Nouvelle Technologie (CDNT) pour un titre RNCP niveau 6 chez 
                <a href="https://astonbysqli.com/" target="_blank" rel="noopener noreferrer"> @AstonSQLI </a> 
                avec en plus 6 ans d'expérience en autodidacte dans la conception de sites web et dans la polyvalence des langages de programmation en tous genres. J'ai l'esprit créatif et l'esprit d'équipe. Je suis aussi véhiculé donc mobile en cas de besoins.</p>
            </div>
        </div>
    );
};

export default Header;