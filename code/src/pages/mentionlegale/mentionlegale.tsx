import React from 'react'
import styles from "../../assets/css/mentionlegale/mentionlegale.module.css"
import Seo from '../../components/seo/seo'

const MentionLegale = () => {
  return (
    <>
  
      <Seo title="Mentions Légales" description="Informations légales et protection des données" url="mentions-legales" />
      
      {/* Bannière avec accessibilité */}

      <main className={styles.box} id="main-content">
        <h1 className={styles.title}>Mentions Légales</h1>
        
        <div className={styles.legalContent}>
            {/* Éditeur du site */}
            <section className={styles.section} aria-labelledby="editeur-title">
                <h2 id="editeur-title" className={styles.editer}>Éditeur du site</h2>
                <p className={styles.para1}>Le site internet du restaurant est édité par :</p>
                <div className={styles.details}>
                    <p><strong>Directeur de la publication :</strong> Prativa KHAREL</p>
                    <p><strong>Société :</strong> Prativa KHAREL SAS au capital de 15 000€</p>
                    <address className={styles.address}>
                        12-14 Cr Mgr Roméro, 91000 Évry-Courcouronnes<br />
                        Téléphone : 01 60 77 87 45
                    </address>
                </div>
            </section>

            {/* Propriété intellectuelle (Style de ton ami) */}
            <section className={styles.section} aria-labelledby="prop-title">
                <h2 id="prop-title" className={styles.editer}>Propriété intellectuelle</h2>
                <p className={styles.para1}>
                    L’ensemble du contenu présent sur ce site (textes, structure, éléments graphiques, code source, maquettes et créations originales) est protégé par les règles relatives à la propriété intellectuelle.
                </p>
                <p className={styles.para1}>
                    Toute reproduction, représentation, modification ou diffusion, totale ou partielle, sans autorisation préalable, est interdite, sauf usage strictement privé ou pédagogique dans les limites prévues par la loi.
                </p>
            </section>

            {/* Crédits visuels (Adapté avec Squoosh et AI) */}
            <section className={styles.section} aria-labelledby="credits-title">
                <h2 id="credits-title" className={styles.editer}>Crédits visuels</h2>
                <p className={styles.para1}>
                    Certaines images utilisées sur ce site proviennent de banques d’images libres d’utilisation, notamment <strong>Unsplash</strong> et <strong>Freepik</strong>. 
                    Les visuels ont été optimisés via l'outil <strong>Squoosh</strong>.
                </p>
                <p className={styles.para1}>
                    Certains contenus ou éléments graphiques ont pu être générés ou assistés par des technologies d'<strong>Intelligence Artificielle</strong>. 
                    En cas de mise en ligne publique définitive, les crédits ou remplacements de visuels devront être vérifiés et complétés si besoin.
                </p>
            </section>

            {/* Responsabilité */}
            <section className={styles.section} aria-labelledby="resp-title">
                <h2 id="resp-title" className={styles.editer}>Responsabilité</h2>
                <p className={styles.para1}>
                    Les informations publiées sur le site sont fournies à titre informatif. Malgré le soin apporté à leur sélection et à leur mise à jour, l’éditrice ne peut garantir l’exactitude, l’exhaustivité ou l’actualité permanente de l’ensemble des contenus.
                </p>
                <p className={styles.para1}>
                    Le site ne saurait être tenu responsable des actions, services ou conditions proposés par des partenaires ou structures externes éventuellement référencés.
                </p>
            </section>

            {/* Données personnelles */}
            <section className={styles.section} aria-labelledby="data-title">
                <h2 id="data-title" className={styles.editer}>Données personnelles</h2>
                <p className={styles.para1}>
                    Les informations éventuellement transmises via les formulaires du site sont utilisées uniquement dans le cadre du fonctionnement du projet (demandes de contact, avis clients) et ne sont pas cédées à des tiers.
                </p>
                <p className={styles.para1}>
                    Conformément à la réglementation (RGPD), toute personne peut demander une rectification ou une suppression des données la concernant via le formulaire de contact du site.
                </p>
            </section>

            {/* Hébergement */}
            <section className={styles.section}>
              <h2 className={styles.editer}>Hébergement</h2>
              <p className={styles.para1}>Société Prativa KHAREL</p>
            </section>
        </div>
      </main>
    </>

    
  );
};

export default MentionLegale;
