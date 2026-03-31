// mongosh -u root -p --authenticationDatabase admin
// use lechemin_dev
// db.dropDatabase()
// load("lechemin.dev.js")
// db.contact.find()

db.contact.insertMany([
        {
          name: 'Amandine',
          email: 'amandine@email.com',
          subject: 'Question sur les plats végétariens',
          message: 'Bonjour, je voulais savoir si vous proposez plusieurs options végétariennes ou véganes dans votre menu. Merci d’avance pour votre réponse.',
          
        },
        {
          name: 'Karim',
          email: 'karim@email.com',
          subject: 'Demande d’information sur les spécialités',
          message: 'Bonjour, je souhaiterais savoir quelles sont vos spécialités népalaises les plus populaires. J’aimerais découvrir votre cuisine prochainement.',
          
        },
        {
          name: 'Julie',
          email: 'julie@email.com',
          subject: 'Question sur le niveau d’épices',
          message: 'Bonsoir, est-il possible de choisir le niveau d’épices pour les plats ? Je viendrai bientôt et je préfère les plats peu relevés.',
          
        },
        {
          name: 'Dhurba',
          email: 'dhurba@email.com',
          subject: 'Information sur les allergies',
          message: 'Bonjour, je suis allergique aux fruits à coque et je voulais savoir si certains plats peuvent être adaptés. Merci beaucoup.',
          
        },
        {
          name: 'Sana',
          email: 'sana@email.com',
          subject: 'Question sur les plats sans gluten',
          message: 'Bonjour, proposez-vous des options sans gluten dans votre carte ? Je voulais me renseigner avant de venir.',
          
        },
        {
          name: 'Romain',
          email: 'romain@email.com',
          subject: 'Demande concernant les plats à emporter',
          message: 'Bonjour, je voulais savoir si votre restaurant propose aussi des plats à emporter ou uniquement sur place. Merci.',
          
        },
        {
          name: 'Léa',
          email: 'lea@email.com',
          subject: 'Question sur votre menu',
          message: 'Bonjour, avez-vous un menu en ligne ou une carte complète disponible sur votre site ? J’aimerais la consulter avant ma visite.',
          
        },
        {
          name: 'Mehdi',
          email: 'mehdi@email.com',
          subject: 'Demande d’informations générales',
          message: 'Bonsoir, je souhaitais avoir quelques informations sur votre restaurant et les spécialités que vous proposez. Merci d’avance.',
          
        }
]);

db.avis.insertMany([
  {
      name: 'Amandine',
      rating: 5,
      message: 'Le Momo (raviolis népalais) est une pure merveille. Une explosion de saveurs en bouche !',
      
  },
  {
      name: 'Karim',
      rating: 4,
      message: 'Très bon accueil. Le poulet Butter Chicken est onctueux, même si le naan était un peu petit.',
     
  },
  {
      name: 'Julie',
      rating: 5,
      message: 'Enfin un restaurant qui propose de vraies options végétariennes savoureuses. Je recommande le Dal Bhat.',
      
  },
  {
      name: 'Dhurba',
      rating: 4,
      message: 'Une ambiance chaleureuse qui rappelle le pays. Les épices sont parfaitement dosées.',
      
  },
  {
      name: 'Sana',
      rating: 3,
      message: 'La cuisine est excellente, mais l’attente était un peu longue ce samedi soir.',
      
  },
  {
      name: 'Romain',
      rating: 5,
      message: 'Dépaysement total ! Le thé népalais à la fin du repas est un incontournable.',
      
  },
  {
      name: 'Léa',
      rating: 4,
      message: 'Super rapport qualité-prix. Les portions sont généreuses et le personnel est souriant.',
      
  },
  {
      name: 'Mehdi',
      rating: 5,
      message: 'Le meilleur restaurant népalais de la ville, sans aucun doute. On reviendra pour l’anniversaire de mon fils.',
      
  },
  {
      name: 'Sophie',
      rating: 2,
      message: 'Un peu trop épicé pour moi, j’aurais dû demander une version plus douce.',
      
  },
  {
      name: 'Thomas',
      rating: 5,
      message: 'Cadre magnifique et plats authentiques. Une adresse à partager absolument !',
  }
]);