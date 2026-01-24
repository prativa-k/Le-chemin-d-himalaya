import Seo from "../../components/seo/seo";
import styles from "./reserver.module.css"


const ReserverPage = () => {
	return (
	
			<div className={styles.box}>
			<div className={styles.banner}>
					<img src="/img/lechemin.jpg" alt="restaurant" />
			</div>
			<div className={styles.con}>
			<Seo title="Reserver" description="Reserver - desc" url="/" />
				<h2 className={styles.title}>Reserver</h2>
				<p className={styles.merci}>Merci de remplir le formulaire, nous vous contacterons pour confirmer.</p>
				</div>
			<form action="" className={styles.form}>

            <p className={styles.name}>
					<label htmlFor='name' > Nom</label>
                <input type="text"  id='name' name='name' required/>
            </p>
            <p className={styles.name}>
                <label htmlFor='prenom' className={styles.name}> Prenom</label>
                <input type="text"  id='prenom' name='prenom' required/>
            </p>
            <p className={styles.name}>
                <label htmlFor="email"> E-mail</label>
                <input type="email"  id='email' name='email' required/>
            </p>

            <p className={styles.name}>
				<label htmlFor="phone"> Portable</label>
				<input type="phone"  id='phone' name='phone' required/>
         
            </p>

            <p className={styles.name}>
				<label htmlFor="date"> Date</label>
				<input type="date"  id='date' name='date' required/> 
				</p>
				
				<p className={styles.name}>
				<label htmlFor="time"> Heurs</label>
				<input type="time"  id='time' name='time' required/> 
			</p>
					
			<p className={styles.name}>
            	 <label htmlFor="person"> Nombre de couverts</label>
				 <input type="time"  id='time' name='time' required/> 
			</p>
				
			<p className={styles.name}>
				<label htmlFor="message"> Message</label>
				<textarea name="message" id="message"></textarea>
               	
			</p>
				
				<div className={styles.submit}>
					<button type="submit" className={styles.button}>Send</button>
				</div>
					</form>	
				

		</div>
			);
		
};

export default ReserverPage;
