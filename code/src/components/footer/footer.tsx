import React from 'react'
import styles from "../../assets/css/footer/footer.module.css"
import { IoIosCall } from "react-icons/io";
import { NavLink } from 'react-router';
import { Link } from 'react-router';


export const navLinks = [
    { label: "Accueil", to: "/" },
    { label: "Réserver", to: "/reserver" },
    { label: "Commander", to: "/commander" },
    { label: "Galerie", to: "/galerie" },
    { label: "Avis", to: "/avis" },
    { label: "Carte", to: "/carte" },
    { label: "Contact", to: "/contact" },
];
  
const Footer = () => {

    

    return (
        <footer className={styles.footer}>
            
            <ul className={styles.footercontent}>

                <li className={styles.name}>Le Chemin d'himalaya</li>
                <li className={styles.address}>
                    <span className={styles.one}>14 Cours Monseigneur Roméro</span>
                    <span className={styles.two}>91000 Évry-Courcouronnes France</span>
                    
                </li>
                <li className={styles.phone}>
                    <span className={styles.icon}><IoIosCall /></span>
                   <span className={styles.number}>+331 60 77 87 45</span> 
                </li>
           
                </ul>
            <ul className={styles.links}>
            {navLinks.map((link) => (
             <li key={link.to} className={ styles.navlink}>
                <NavLink className={styles.navlink} to={link.to}>{link.label}</NavLink>
                </li>
                
             ))}
            </ul>

          
            <div className={styles.mentionlegale}>
            <Link className={styles.mentiontext} to={"/mentionlegale"}>Mention Légales</Link>
             </div>
              
                
               
        </footer>
    )
};

export default Footer;
