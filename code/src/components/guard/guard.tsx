'use client';

import { useNavigate } from "react-router";
import type { GuardProps } from "../../models/props/guard_props";
import { useEffect } from "react";
import SecurityService from "../../services/security_service";

const Guard = ({roles, children}: GuardProps) => {
    // useNavigate permet de créer une redirection
    const navigate = useNavigate();

    //verifier le role l'affichage du composant /page
    useEffect(() => {
        // récupérer l'utilisateur
        const user = new SecurityService().getUser();

        // si le role n'est pas autorisé
      if( roles.indexOf(user?.role?.name as string) === -1){
        // redirection vers une page react
        navigate("/");
      }
    }, [roles.indexOf,navigate]);
    
    return <>{children}</> ;
};

export default Guard;