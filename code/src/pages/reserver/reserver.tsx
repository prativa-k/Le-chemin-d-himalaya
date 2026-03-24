import Seo from "../../components/seo/seo";
import styles from "./reserver.module.css"


const ReserverPage = () => {
	return (
	
			<div className={styles.box}>
			<div className={styles.banner}>
					<img src="/img/lechemin.jpg" alt="restaurant" />
			</div>
			<div className={styles.con}>
			<Seo title="Reserver" description="Reserver - desc" url="/reserver" />
				<h2 className={styles.title}>Reserver</h2>
				<p className={styles.merci}>Merci de remplir le formulaire, nous vous contacterons pour confirmer.</p>
				</div>
			<form action="" className={styles.form}>

            <div className={styles.row}>
					<label htmlFor='name' > Nom:</label>
                <input type="text"  id='name' name='name' required/>
            </div>
            <div className={styles.row}>
                <label htmlFor='prenom' className={styles.name}> Prenom:</label>
                <input type="text"  id='prenom' name='prenom' required/>
            </div>
            <div className={styles.row}>
                <label htmlFor="email"> E-mail:</label>
                <input type="email"  id='email' name='email' required/>
            </div>

            <div className={styles.row}>
				<label htmlFor="phone"> Portable:</label>
				<input type="phone"  id='phone' name='phone' required/>
         
            </div>

            <div className={styles.row}>
				<label htmlFor="date"> Date:</label>
				<input type="date"  id='date' name='date' required/> 
				</div>
				
			<div className={styles.row}>
				<label htmlFor="time"> Heurs:</label>
				<input type="time"  id='time' name='time' required/> 
			</div>
					
			<div className={styles.row}>
            	 <label htmlFor="person"> Nombre de couverts:</label>
				 <input type="number"  id='person' name='person' required/> 
			</div>
				
			<div className={styles.row}>
				<label htmlFor="message"> Message:</label>
				<textarea name="message" id="message"></textarea>
               	
			</div>
				
		
					<button type="button">Submit</button>
				
					</form>	
				

		</div>
			);
		
};

export default ReserverPage;
