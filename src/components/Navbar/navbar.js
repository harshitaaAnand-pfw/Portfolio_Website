import React, { useState } from "react";
import './navbar.css';
import logo from "../../assets/logo.avif"
import {Link} from 'react-scroll';
import contact from '../../assets/contact.png'
import menu from '../../assets/menu.png'
const Navbar = () =>{
    const [showMenu, setShowMenu] = useState(false)
    return(
        <nav className="navbar">
            <img src= {logo} alt="Logo" className="logo"/>
            <div className="desktopMenu">
                <Link activeClass = 'active' to = 'intro' spy={true} smooth = {true} offset={-100} duration ={500}  className="desktopMenuListItem">Home</Link>
                <Link activeClass = 'active' to = 'skills' spy={true} smooth = {true} offset={-100} duration ={500}className="desktopMenuListItem">About</Link>
                <Link activeClass = 'active' to = 'projects' spy={true} smooth = {true} offset={-100} duration ={500}className="desktopMenuListItem">Projects</Link>
                <Link activeClass = 'active' to = 'certifications' spy={true} smooth = {true} offset={-50} duration ={500}className="desktopMenuListItem">Certifications</Link>
                <Link activeClass = 'active' to = 'achivements' spy={true} smooth = {true} offset={-50} duration ={500}className="desktopMenuListItem">Achievements</Link>
                
            </div>
            <button className="desktopMenuButton" onClick={() =>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src ={contact} alt ="Contact" className="desktopMenuImg"/>
                Contact Me
            </button>

            <img src= {menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)}/>
            <div className="navMenu"  style= {{display:showMenu?'flex':'none'}} >
                <Link activeClass = 'active' to = 'intro' spy={true} smooth = {true} offset={-100} duration ={500}  className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass = 'active' to = 'skills' spy={true} smooth = {true} offset={-100} duration ={500}className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass = 'active' to = 'projects' spy={true} smooth = {true} offset={-100} duration ={500}className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
                <Link activeClass = 'active' to = 'certifications' spy={true} smooth = {true} offset={-50} duration ={500}className="listItem" onClick={() => setShowMenu(false)}>Certifications</Link>
                <Link activeClass = 'active' to = 'achivements' spy={true} smooth = {true} offset={-50} duration ={500}className="listItem" onClick={() => setShowMenu(false)}>Achievements</Link>
                <Link activeClass = 'active' to = 'contact' spy={true} smooth = {true} offset={-50} duration ={500}className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
                
            </div>
        </nav>
    )
}

export default Navbar;