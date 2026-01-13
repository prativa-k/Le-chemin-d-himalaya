"use client";
import { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import type { ZodIssue } from "zod/v3";
import type { Menu } from "../../../../models/menu";
import type { Orderable } from "../../../../models/orderable";
import type { AdminMenuFormContentProps } from "../../../models/props/admin_menu_form_content_props";
import MenuApiService from "../../../services/menu_api_service";
import { useNavigate } from "react-router";
import { data } from "react-router";

const AdminMenusFormContent = ({
	orderables,
	validator,
	dataToUpdate,
	
}: AdminMenuFormContentProps) => {
	const nameId = useId();
	const priceId = useId();
	const idId = useId();


	

	// useNavigate permet de créer une redirection
	const navigate = useNavigate();

	// stocker les messages d'erreur de validation côté serveur
	const [serverErrors, setServerErrors] = useState<Partial<Menu>>();

	// message lié à la soumission du formulaire
	const [message, setMessage] = useState<string>("")

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Partial<Menu>>();


	//pré-remplier le formulaire avant l'affichage du composant
	useEffect(() => {

		// si des données sont à mettre à jour
		if(dataToUpdate){

			// normaliser les données saisies : se baser sur les données testées dans flashpost pour que les données
			const normalizedData = {
			...dataToUpdate,
			orderable_ids: (dataToUpdate.orderable_ids as string).split(',')
		};
			reset(normalizedData)
		}
		
	},[reset, dataToUpdate])

	// // soumission du formulaire
	// // data stocke la saisie du formulaire
	const submitForm = async (data: Partial<Menu>) => {
		// normaliser les données saisies : se baser sur les données testées dans flashpost pour que les données
		const normalizedData = {
			...data,
			orderable_ids: (data.orderable_ids as unknown as Orderable[]).join(),
		};

		const validation = await validator(normalizedData);

		// console.log(validation);

		// si la validation échoue
		if (validation instanceof Error) {
			// stocker les messages d'erreur
			let errors = {};

			//récupérer les messages d'erreur
			(JSON.parse(validation.message) as ZodIssue[]).map((item) => {
				errors = { ...errors, [item.path.shift() as string]: item.message };
				return errors;
			});

			// définir l'état affichant les messages d'erreur côté serveur
			setServerErrors(errors);

			return;
		}

		// if you have images in you file you have to do the formdata
		// formData.set("id", normalizedData.id as unknown as string);
		// formData.set("name", normalizedData.name as unknown as string);
		// formData.set("image", normalizedData.image as unknown as string);
		// formData.set(
		// 	"description",
		// 	normalizedData.description as unknown as string,
		// );
		// formData.set("is_active", normalizedData.is_active ? "1" : "0");
		// formData.set("asso_id", normalizedData.asso_id as unknown as string);

		// requête HTTP vers l'API
		const process = dataToUpdate
			? await new MenuApiService().Update(normalizedData)
			: await new MenuApiService().insert(normalizedData);
		// console.log(process);

		// si la requête HTTP a réussie
		if([200,201].indexOf(process.status) !== -1) {

			// redirection
			navigate("/admin/menus");
		}
		else if ([400].indexOf(process.status) !== -1) {
			// afficher un message
			setMessage(process.message as unknown as string);
		}
	};

	return (
		<>
			<p>Gérer les menus</p>

			{/* afficher le message */}
			{
				message ? <p role="alert">{message}</p> : null
			}

			{/* 
 
 			- "si le formulaire contient un champ fe fichier: ajouter l'attribut enctype = multipart/ form-data"

 			- pour les champs en relation:
 			FK: Créer , soit une liste déroulante

 			<select>, soit des butons radio
 			> sélection d'un seul choix
 			table de jointure: cases à cocher
 			> sélection de plusieurs choix

			*/}

			<form onSubmit={handleSubmit(submitForm)}>
				<p>
					<label htmlFor={nameId}>Nom:</label>
					<input
						type="text"
						id={nameId}
						{...register("name", {
							required: "Name is required",
							minLength: {
								value: 2,
								message: "Un nom doit comporter, au minimum, 2 caractères",
							},
							maxLength: {
								value: 50,
								message: "Un nom doit comporter, au maximum, 50 caractères",
							},
						})}
					/>
					{/* Afficher les messages d'erreur : utiliser le name du champ, définit dans register */}
					<small role="alert">
						{errors.name?.message ?? serverErrors?.name}
					</small>
				</p>

				<p>
					<label htmlFor={priceId}>Prix:</label>
					<input
						type="text"
						id={priceId}
						{...register("price", {
							required: "Price is required",

							min: {
								value: 2,
								message: "Le prix doit être au minimum de 2€",
							},
							max: {
								value: 50,
								message: "Un nom doit comporter, au maximum, 50 caractères",
							},
						})}
					/>
					{/* Afficher les messages d'erreur : utiliser le name du champ, définit dans register */}
					<small role="alert">
						{errors.price?.message ?? serverErrors?.price}
					</small>
				</p>

				<p>Plats:</p>
				{orderables.map((item) => {
					return (
						<p key={item.id}>
							<input
								type="checkbox"
								value={item.id}
								id={item.id as unknown as string}
								{...register("orderable_ids", {
									required: "orderable_ids is required",
								})}
							/>
							{/* //reprendre strictement le nom des champs de formulaire testés avec flashpost */}
							<label htmlFor={item.id as unknown as string}> {item.name}</label>
						</p>
					);
				})}
				{/* Afficher les messages d'erreur : utiliser le name du champ, définit dans register */}
				<small role="alert">
					{errors.orderable_ids?.message ?? serverErrors?.orderable_ids}
				</small>

				<p>
					<input type="hidden" id={idId} {...register("id")} />
					<button type="submit">Créer un Menu</button>
				</p>
			</form>
		</>
	);
};

export default AdminMenusFormContent;
