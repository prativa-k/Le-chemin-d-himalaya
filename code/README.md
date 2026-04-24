# 🌍 Le Chemin d'himalaya
![logo](code/public/img/logo.webp)
 ## 📖 Description FR
Le Chemin de l’Himalaya est un site vitrine moderne et "mobile-first" conçu pour remplacer une plateforme obsolète datant de 2006 par une expérience numérique professionnelle. Tandis que les visiteurs peuvent parcourir les plats authentiques, réserver une table et laisser des avis, le site intègre également un espace administrateur sécurisé permettant au restaurateur de gérer l'intégralité de sa carte (CRUD) en temps réel.

 ## 📖 Description EN
Le Chemin de l’Himalaya is a modern, mobile-first showcase website designed to replace an obsolete platform from 2006 with a professional digital experience. While visitors can browse authentic dishes, book tables, and leave reviews, the site also features a secure administrative dashboard allowing the restaurateur to manage their entire menu (CRUD) in real-time.

👉 Objectif FR :
L'objectif principal est de moderniser l'image de marque du restaurant en remplaçant un site obsolète par une plateforme "mobile-first" performante et sécurisée. Ce projet vise à offrir une expérience fluide aux clients pour la consultation et les réservations, tout en garantissant au restaurateur une autonomie totale grâce à un outil d'administration intuitif pour gérer son menu en temps réel.

👉 Objectif EN :
The objective of this project is to modernize the restaurant's brand image by replacing an obsolete website with a high-performance, mobile-first platform. It aims to provide a seamless experience for customers to browse the menu and book tables, while giving the owner total autonomy to manage their menu in real-time through an intuitive and secure administrative tool.
---

## 🎯 Problématique FR
Comment transformer une présence numérique vieille de 20 ans en un site vitrine moderne et adapté aux mobiles, afin de mieux représenter la qualité du restaurant et de redevenir compétitif face aux autres établissements ? 

## 🎯 Problématique EN
How can a 20-year-old digital presence be transformed into a modern, mobile-friendly showcase website to better reflect the restaurant's quality and regain a competitive edge against other establishments?

---



## 🚀 Fonctionnalités FR

### 👥 Tous les site visiteurs
- Compatibilité Multi-support
- Consultation du menu
- Réservation
- Formulaire de contact
- Connexion sécurisée

### 🔐 Utilisateur connecté
- Avis et commentaires

### 🛠️ Administrateur
- Gestion des Menu (CRUD)
-  Creation d'un compte admin

## 🚀 Fonctionnalités EN

### 👥 Tous les site visiteurs
- Cross-Device Compatibility
- Menu Browsing
- Reservations
- Contact Form
- Secure Login

### 🔐 Utilisateur connecté
- Reviews & Comments

### 🛠️ Administrateur
- Menu Management (CRUD)
- Admin Account Creation


---

## 🧰 Langages et applications

### 🌐 Langages

![HTML](https://img.shields.io/badge/HTML-orange?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-blue?logo=css3&logoColor=white)

![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-lightgrey?logo=mysql&logoColor=black)

---

### ⚙️ Frameworks & Technologies

![React](https://img.shields.io/badge/React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-black?logo=express)
![Docker](https://img.shields.io/badge/Docker-blue?logo=docker)

---

### 🗄️ Base de données

![MySQL](https://img.shields.io/badge/MySQL-blue?logo=mysql)

---

### 🛠️ Outils & Applications

![VS Code](https://img.shields.io/badge/VS%20Code-blue?logo=visualstudiocode)
![Git](https://img.shields.io/badge/Git-orange?logo=git)
![GitHub](https://img.shields.io/badge/GitHub-black?logo=github)
![Postman](https://img.shields.io/badge/Postman-orange?logo=postman)

## ⚙️ Installation

### 🔹 Pré-requis
- Docker : https://www.docker.com/

<!-- ### 🔹 Lancer le projet

```bash
docker compose up --build
#  points d'accés -endpoint- de l'API rest -->

## 🐳 Installation avec Docker & dépendances
## 🐳 Création et lancement de l’environnement Docker

Le projet utilise Docker pour lancer automatiquement les services nécessaires :

- `app` : application Node.js / Express
- `mysql` : base de données relationnelle
- `mongodb` : base de données NoSQL

### 🔹 Créer et lancer les conteneurs

```bash
docker compose up -d -build
```
### 🔹 Vérifier les conteneurs

```bash
docker compose ps
```

## ▶️ La procédure d’accès

### 🔹 Frontend

```bash
npm run dev
```
### 🔹 Backend

```bash
npm run server

```
### 🔹 Construire l’application

```bash
npm run build

```
🧪 Les tests

Des tests automatisés sont exécutés pour vérifier le bon fonctionnement de certaines fonctionnalités du projet.
### 🔹 Exécution des tests

```bash
npm run test:coverage
```
### 🔹 Installation des dépendances (mode local)

```bash
npm install
```


### 🔹 Prérequis

Avant de lancer le projet, installer :

- Docker : https://www.docker.com/  
- Git :  https://git-scm.com/  
- Visual Studio Code : https://code.visualstudio.com/ 

 
### 🔹 Dépendances utilisées

Le projet repose sur les dépendances suivantes :

#### Backend
- express → serveur API
- mysql2 → connexion MySQL
- argon2 → hash des mots de passe
- express-session → gestion des sessions
- cors → communication frontend/backend
- zod → validation des données

#### Frontend
- react → interface utilisateur
- typescript → typage du code
- react-router → navigation
- react-markdown → affichage des leçons
- mdx editor → édition des contenus

---

## 🌐 points d'accés -endpoint- de l'API rest

### 👤 Authentification
Méthode HTTP | Route         | Description
-------------|---------------|------------
POST         | /api/register | Inscription utilisateur
POST         | /api/login    | Connexion utilisateur
POST         | /api/logout   | Déconnexion utilisateur
---

### Menu

Méthode HTTP | Route                      | Description
-------------|----------------------------|------------
GET          | /api                       | Message d’accueil API
GET          | /api/menu                  | Liste des menus
GET          | /api/menu/:id              | Détail d’un menu
POST         | /api/menu                  | Créer un menu (admin)
PUT          | /api/menu                  | Modifier un menu (admin)
DELETE       | /api/menu                  | Supprimer un menu (admin)

---

## Avis 

Méthode HTTP | Route        | Description
-------------|--------------|------------
GET          | /api/avis    | Liste des avis
POST         | /api/avis    | Créer un avis

---

## Category 

Méthode HTTP | Route            | Description
-------------|------------------|------------
GET          | /api/category     | Liste des catégories
GET          | /api/category/:id | Détail d’une catégorie
POST         | /api/category     | Créer une catégorie

-- 


### 🧑‍🤝‍🧑 Roles

Méthode HTTP | Route | Description
-------------|-------|------------
GET          | /api/role                  | Liste des rôles
GET          | /api/role/:id              | Détail d’un rôle

---

### User

Méthode HTTP | Route | Description
-------------|-------|------------
GET          | /api/user                  | Liste des utilisateurs
GET          | /api/user/:id              | Détail d’un utilisateur

---

### 📩 Contact

Méthode HTTP | Route | Description
-------------|-------|------------
GET          | /api/contact        | Liste des messages de contact
POST         | /api/contact        | Envoyer un message

--

### Drink

Méthode HTTP | Route | Description
-------------|-------|------------
GET          | /api/drink                 | Liste des boissons
GET          | /api/drink/:id             | Détail d’une boisson

--


### DrinkType

Méthode HTTP | Route | Description
-------------|-------|------------
GET          | /api/drink-type            | Liste des types de boissons
GET          | /api/drink-type/:id        | Détail d’un type de boisson

--
### Orderable

Méthode HTTP | Route | Description
-------------|-------|------------
GET          | /api/orderable             | Liste des produits commandables
GET          | /api/orderable/:id         | Détail d’un produit commandable
POST         | /api/orderable             | Créer un produit commandable

--

### OrderableSpice

Méthode HTTP | Route | Description
-------------|-------|------------
GET          | /api/orderable-spice       | Liste des niveaux d’épices
GET          | /api/orderable-spice/:id   | Détail d’un niveau d’épices

--

### OrderableType

Méthode HTTP | Route | Description
-------------|-------|------------
GET          | /api/orderable-type        | Liste des types de produits
GET          | /api/orderable-type/:id    | Détail d’un type de produit

--



## pdf (Le cahier des charges du projet)

[Cahier des charges](https://docs.google.com/document/d/1WOhSvDM0ijh7rfX0oDloYStSvrI6VXB0/edit)
## La présentation du projet 
[Présenation](https://gamma.app/docs/Le-Chemin-de-lHimalaya-d4i8wqc9166svw2?mode=doc)