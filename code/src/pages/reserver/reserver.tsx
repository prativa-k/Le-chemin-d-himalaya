"use client";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { reserver } from "../../../models/reserver"
import Seo from "../../components/seo/seo";
import styles from "./reserver.module.css";

function ReserverPage() {
    // Accessibility IDs
    const nameId = useId();
    const prenomId = useId();
    const emailId = useId();
    const phoneId = useId();
    const dateId = useId();
    const timeId = useId();
    const personId = useId();
    const messageId = useId();

    const navigate = useNavigate();
    const [message, setMessage] = useState<string>("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<reserver>();

    const submitForm = async (data: reserver) => {
        // Here you would call your ReserveApiService just like your ContactApiService
        console.log("Form Data:", data);
        
        // Simulating a successful submission redirect
        navigate("/confirmation");
    };

    return (
        <div className={styles.box}>
            <div className={styles.banner}>
                <img src="/img/lechemin.jpg" alt="restaurant" />
            </div>

            <div className={styles.con}>
                <Seo title="Reserver" description="Reserver - desc" url="/reserver" />
                <h2 className={styles.title}>Reserver</h2>
                <p className={styles.merci}>
                    Merci de remplir le formulaire, nous vous contacterons pour confirmer.
                </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
                {message && <p className={styles.successMessage}>{message}</p>}

                <div className={styles.row}>
                    <label htmlFor={nameId} className={styles.labelName}>Nom:</label>
                    <input
                        type="text"
                        id={nameId}
                        className={styles.inputField}
                        {...register("name", { required: "Le nom est requis." })}
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name.message}</span>}
                </div>

                <div className={styles.row}>
                    <label htmlFor={prenomId} className={styles.labelName}>Prénom:</label>
                    <input
                        type="text"
                        id={prenomId}
                        className={styles.inputField}
                        {...register("prenom", { required: "Le prénom est requis." })}
                    />
                    {errors.prenom && <span className={styles.errorText}>{errors.prenom.message}</span>}
                </div>

                <div className={styles.row}>
                    <label htmlFor={emailId} className={styles.labelName}>E-mail:</label>
                    <input
                        type="email"
                        id={emailId}
                        className={styles.inputField}
                        {...register("email", { required: "L'email est requis." })}
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email.message}</span>}
                </div>

                <div className={styles.row}>
                    <label htmlFor={phoneId} className={styles.labelName}>Portable:</label>
                    <input
                        type="tel"
                        id={phoneId}
                        className={styles.inputField}
                        {...register("phone", { required: "Le numéro est requis." })}
                    />
                    {errors.phone && <span className={styles.errorText}>{errors.phone.message}</span>}
                </div>

                <div className={styles.row}>
                    <label htmlFor={dateId} className={styles.labelName}>Date:</label>
                    <input
                        type="date"
                        id={dateId}
                        className={styles.inputField}
                        {...register("date", { required: "La date est requise." })}
                    />
                    {errors.date && <span className={styles.errorText}>{errors.date.message}</span>}
                </div>

                <div className={styles.row}>
                    <label htmlFor={timeId} className={styles.labelName}>Heures:</label>
                    <input
                        type="time"
                        id={timeId}
                        className={styles.inputField}
                        {...register("time", { required: "L'heure est requise." })}
                    />
                    {errors.time && <span className={styles.errorText}>{errors.time.message}</span>}
                </div>

                <div className={styles.row}>
                    <label htmlFor={personId} className={styles.labelName}>Nombre de couverts:</label>
                    <input
                        type="number"
                        id={personId}
                        className={styles.inputField}
                        {...register("person", { 
                            required: "Requis.",
                            min: { value: 1, message: "Min 1." }
                        })}
                    />
                    {errors.person && <span className={styles.errorText}>{errors.person.message}</span>}
                </div>

                <div className={styles.row}>
                    <label htmlFor={messageId} className={styles.labelName}>Message:</label>
                    <textarea
                        id={messageId}
                        className={`${styles.inputField} ${styles.textArea}`}
                        {...register("message")}
                    />
                </div>

                <button type="submit" className={styles.submitBtn}>Submit</button>
            </form>
        </div>
    );
}

export default ReserverPage;