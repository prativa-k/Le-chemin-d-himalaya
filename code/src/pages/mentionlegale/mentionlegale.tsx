import React from 'react'
import styles from "../../assets/css/mentionlegale/mentionlegale.module.css"

const MentionLegale = () => {
  return (
    <>
      <div className={ styles.mentionlegale}>
        <img src="/img/banner.jpg" alt="" />
      </div>

      <div className={styles.box}>
        <h2 className={styles.title}>Mention Légales</h2>
        <div>
          <ul>
            <li>
                <h3 className={styles.editer}>Éditeur du site</h3>
                 <p className={styles.para1}>Le site internet Nom du Restaurant est édité par la société :</p>
                <h4 className={styles.publication}>Directeur de la publication : Prativa KHAREL </h4>

                 <p className={styles.publication}>Le site  est édité par Prativa KHAREL SAS</p> 

                <p className={styles.publication}> SAS au capital de 15000€</p> 
              
                <p className={styles.publication}>  12-14 Cr Mgr Roméro, 91000 Évry-Courcouronnes 91000 Evry 01 60 77 87 45</p>
            </li>

            <li>
                <h3 className={styles.editer}>Propriété intellectuelle</h3>
                 <p className={styles.para1}>Tous les contenus présents, tels que les textes, graphiques, logos, images, photographies, vidéos présents sur ce site sont, sauf mention contraire, la propriété de KHAREL Prativa.</p>

            </li>

            <li>
                 <h3 className={styles.editer}>Utilisation des données</h3>
                 <p className={styles.para1}>La société collecte des différentes données (nom du contact, nom du restaurant, email, n° de téléphone etc…) lorsque vous renseignez un formulaire sur notre site. Ces informations sont nécessaires à notre société pour traiter votre demande.</p>
                <h4 className={styles.publication}>Elles sont enregistrées dans notre fichier clients et peuvent donner lieu à l’exercice du droit d’accès et de rectification auprès de notre service clientèle au 01.85.08.37.29. Ces informations ne sont pas diffusées à des organismes tiers.</h4>
            </li>

            <li>
              <h3 className={styles.editer}>Cookies</h3>
              <p className={styles.para1}>Un ou plusieurs « cookies » peuvent être placés sur le disque dur de l’ordinateur des internautes visiteurs du site afin de faciliter leur connexion au site, la gestion des comptes ou de garder en mémoire leurs réglages. Ces cookies peuvent aussi nous permettre de mieux comprendre ce qui vous intéresse sur notre site et de vous proposer du contenu pertinent grâce à notre partenaire publicitaire Adroll. Les cookies ne collectent pas d’informations personnelles comme le nom, l’email, l’adresse ou le téléphone du visiteur. Aucune corrélation n’est faite entre ces cookies et des informations nominatives que pourrait détenir KHAREL Prativa</p>
            </li>

            <li>
              <h3 className={styles.editer}>Responsabilités</h3>
              <p className={styles.para1}>Les informations fournies sur le site kharel prativa le sont à titre indicatif.L’exactitude, la complétude, l’actualité des informations diffusées sur kharel prativa ne sauraient être garanties. Vous êtes le seul et unique responsable de l’usage du site kharel prativa et de ses contenus. Le site  kharel prativa ne pourra être tenu pour responsable d’un usage non conforme aux normes des lois en vigueur, du site internet ou de ses contenus. Ce site peut comporter des informations fournies par des sociétés externes ou des liens hypertextes vers d’autres sites qui ne sont pas gérés par kharel prativa. L’existence d’un lien depuis kharel prativa vers un autre site ne constitue pas une validation de ce site ou de son contenu. Tout message publié, de manière générale, demeure sous l’entière responsabilité de son auteur.</p>
            </li>

            <li>
              <h3 className={styles.editer}>Hebergement</h3>
              <p className={styles.para1}>Société Prativa KHAREL</p>
            </li>
          </ul>

        </div>
      </div>

     
      
      </>
  )
}

export default MentionLegale;
