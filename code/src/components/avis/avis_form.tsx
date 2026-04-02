"use client";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import type { Avis } from "../../../models/avis";
import SecurityService from "../../services/security_service";
import styles from "../../assets/css/avis/avis_form.module.css"
import AvisApiService from "../../services/avis_api_service";

function AvisForm() {
    const ratingId = useId();
    const avisTextId = useId();
    const user = new SecurityService().getUser();
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Partial<Avis>>();
    const [message, setMessage] = useState<string>("");

    const submitForm = async (data: Partial<Avis>) => {
        // On construit l'objet final avec l'email de l'utilisateur connecté
        const finalData = { 
            ...data, 
            email: user?.email,
            // La date et l'ID seront gérés par le backend
        };

        const process = await new AvisApiService().insert(finalData as Avis);

        if ([200, 201].includes(process.status)) {
            setMessage("Merci ! Votre avis a été publié avec succès.");
            reset(); // On vide les champs après l'envoi
        } else {
            setMessage("Une erreur est survenue. Veuillez réessayer.");
        }
    };

    return (
        <form className={styles.avisForm} onSubmit={handleSubmit(submitForm)}>
            
            {message && <p className={styles.serverMessage}>{message}</p>}

            {/* Note / Rating */}
            <div className={styles.formGroup}>
                <label htmlFor={ratingId} className={styles.label}>Note sur 5</label>
                <input
                    type="number"
                    id={ratingId}
                    className={styles.input}
                    {...register("rating", { 
                        required: "La note est obligatoire.",
                        min: { value: 1, message: "Minimum 1 étoile." },
                        max: { value: 5, message: "Maximum 5 étoiles." }
                    })}
                />
                {errors.rating && <span className={styles.error}>{errors.rating.message}</span>}
            </div>

            {/* Message / Avis */}
            <div className={styles.formGroup}>
                <label htmlFor={avisTextId} className={styles.label}>Votre Avis</label>
                <textarea
                    id={avisTextId}
                    className={styles.textarea}
                    placeholder="Qu'avez-vous pensé de votre repas ?"
                    {...register("avis", { 
                        required: "Le message est requis.",
                        minLength: { value: 10, message: "Votre avis doit faire au moins 10 caractères." }
                    })}
                />
                {errors.avis && <span className={styles.error}>{errors.avis.message}</span>}
            </div>

            <button type="submit" className={styles.submitBtn}>
                Envoyer mon avis
            </button>
        </form>
    );
}

export default AvisForm;