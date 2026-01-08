

function Contact() {
  return (
    <div>
        <h2>Contact et Réservations</h2>
        <p>Réservez une table ou envoyez-nous un message – nous serons ravis de vous répondre.</p>

        <form action="">
            <p>
                <label htmlFor='name'> Nom</label>
                <input type="text"  id='name' name='name' required/>
            </p>
            <p>
                <label htmlFor='prenom'> Prenom</label>
                <input type="text"  id='prenom' name='prenom' required/>
            </p>
            <p>
                <label htmlFor="email"> Email</label>
                <input type="email"  id='email' name='email' required/>
            </p>

            <p>
                <label htmlFor="phone"> Phone</label>
                <input type="tel"  id='phone' name='phone' required/>
            </p>

            <p>
                <label htmlFor="message"> Message</label>
               <textarea name="message" id="message"></textarea>
            </p>

            <button type="submit">Send</button>

         
        </form>

        
    
    </div>
  )
};

export default Contact;