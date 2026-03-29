"use client"

import { useEffect } from "react";
import { useNavigate } from "react-router";
import SecurityService from "../../services/security_service";

const Logout = () => {
    // useNavigate permet de créer une redirection
    const navigate = useNavigate();

    // suprimer à l'affichage du composant /page
    useEffect(() => {
        // déconnexion 
        new SecurityService().logout();

        // redirection vers une route
        navigate ("/")
    }, [navigate]);
    return <></>
};

export default Logout;