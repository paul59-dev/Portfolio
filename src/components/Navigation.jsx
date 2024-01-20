import React from 'react';
import { NavLink } from 'react-router-dom';
import ImageProject from '../assets/images/love.png';
import ImageAboutMe from '../assets/images/follower.png';
import ImageLanguage from '../assets/images/programming-language.png';
import ImageContactMe from '../assets/images/comment.png';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li><img src={ImageProject} alt="Projet créer"/></li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li><img src={ImageAboutMe} alt="A propos de moi"/></li>
                </NavLink>
                <NavLink to="/skills" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li><img src={ImageLanguage} alt="Langage de programmation"/></li>
                </NavLink>
                <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li><img src={ImageContactMe} alt="Contactez-moi"/></li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;