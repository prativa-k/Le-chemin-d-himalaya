"use client";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { Contact } from "../../../models/contact";
import styles from "../../assets/css/contact/contact_form.module.css";
import ContactApiService from "../../services/contact_api_service";

function ContactForm() {
	const nameId = useId();
	const prenomId = useId();
	const emailId = useId();
	const phoneId = useId();
	const messageId = useId();

	const [serverErrors, setServerErrors] = useState<Partial<Contact>>({});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Partial<Contact>>();

	const navigate = useNavigate();
	// message lié à soumission du formulaire
	const [message, setMessage] = useState<string>("");

	const submitForm = async (data: Partial<Contact>) => {
		setServerErrors({});

		const process = await new ContactApiService().insert(data as Contact);

		if ([200, 201].includes(process.status)) {
			// setMessage("utilisateur enregistré");
			navigate("/confirmation");
		} else if ([400].includes(process.status)) {
			setMessage("erreur");
		}
	};
	return (
		<div className={styles.contactContainer}>
      <h2 className={styles.formTitle}>Contact</h2>
      <p className={styles.formSubtitle}>
        Envoyez-nous un message – nous serons ravis de vous répondre.
      </p>

      <form className={styles.contactForm} onSubmit={handleSubmit(submitForm)}>
        
        {message && <p className={styles.successMessage}>{message}</p>}

        {/* Name Input with Alphabet and Length validation */}
        <div className={styles.formGroup}>
          <label htmlFor={nameId} className={styles.formLabel}>Nom</label>
          <input
            type="text"
            id={nameId}
            className={styles.formInput}
            {...register("name", { 
                required: "Le nom est requis.",
                minLength: { value: 2, message: "Minimum 2 caractères." },
                maxLength: { value: 30, message: "Maximum 30 caractères." },
                pattern: {
                    value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s|-]+$/i,
                    message: "Le nom ne doit contenir que des lettres."
                }
            })}
          />
          {errors.name && <span className={styles.errorText}>{errors.name.message}</span>}
        </div>

        {/* First Name Input */}
        <div className={styles.formGroup}>
          <label htmlFor={prenomId} className={styles.formLabel}>Prénom</label>
          <input
            type="text"
            id={prenomId}
            className={styles.formInput}
            {...register("prenom", { 
                required: "Le prénom est requis.",
                minLength: { value: 2, message: "Minimum 2 caractères." },
                pattern: {
                    value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s|-]+$/i,
                    message: "Le prénom ne doit contenir que des lettres."
                }
            })}
          />
          {errors.prenom && <span className={styles.errorText}>{errors.prenom.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor={emailId} className={styles.formLabel}>E-mail</label>
          <input
            type="email"
            id={emailId}
            className={styles.formInput}
            {...register("email", { 
                required: "L’email est requis.",
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Format d'email invalide."
                }
            })}
          />
          {errors.email && <span className={styles.errorText}>{errors.email.message}</span>}
        </div>

        {/* Phone Input with Digit-only validation */}
        <div className={styles.formGroup}>
          <label htmlFor={phoneId} className={styles.formLabel}>Numero Portable</label>
          <input
            type="tel"
            id={phoneId}
            className={styles.formInput}
            {...register("phone", { 
                required: "Numéro portable est requis.",
                pattern: {
                    value: /^[0-9+ ]+$/,
                    message: "Veuillez entrer uniquement des chiffres."
                },
                minLength: { value: 10, message: "Le numéro est trop court." }
            })}
          />
          {errors.phone && <span className={styles.errorText}>{errors.phone.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor={messageId} className={styles.formLabel}>Message</label>
          <textarea
            id={messageId}
            className={`${styles.formInput} ${styles.formTextarea}`}
            {...register("message", { 
                required: "Message est requis.",
                minLength: { value: 10, message: "Votre message est trop court." },
                maxLength: { value: 500, message: "Maximum 500 caractères." }
            })}
          />
          {errors.message && <span className={styles.errorText}>{errors.message.message}</span>}
        </div>

        <button type="submit" className={styles.submitBtn}>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
