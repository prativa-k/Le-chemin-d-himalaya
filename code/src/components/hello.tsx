import { Fragment } from "react/jsx-runtime";
import styles from "../assets/css/hello.module.css";

const Hello = () => {
	const name = "prativa";
	const students = ["Sabah", "Hayat", "Dominga"];
	const isConnected = true;
	return (
		<div className= {styles.hello} >

			<h1 className={styles.title}>Coucou{name}</h1>
			<h2>Hello</h2>
			{isConnected ? "Déconnexion" : "connexion"}
			<hr />
			<img src="/img/vite.svg" alt="" />
			<label htmlFor="tutu">Nom:</label>
			<input type="text" id="tutu" />
			{students.map((value) => (
				<p key={Math.random()}>{value}</p>
			))}
			;
		</div>
	);
};

export default Hello;
