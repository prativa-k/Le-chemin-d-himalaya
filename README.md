# Le Chemin d’Himalaya

![Logo](code/public/img/logo.webp)

## Description

**FR**  
Site vitrine + application web pour le restaurant *Le Chemin d’Himalaya* (Évry 91000).  
Le projet contient une **partie front** (Vite + React) et une **API** (Express) utilisée par l’interface.

**EN**  
Showcase website + web app for the restaurant *Le Chemin d’Himalaya* (Évry 91000).  
This project includes a **frontend** (Vite + React) and an **API** (Express) consumed by the UI.

## Fonctionalité

**FR (côté site / UI)**  
- Pages publiques (selon `code/src/pages/`) : accueil, carte/menu, commander, réserver, galerie, avis, contact, mentions légales  
- Auth : inscription, connexion, déconnexion  
- Espace admin : pages d’administration du menu

**EN (UI features)**  
- Public pages (from `code/src/pages/`): home, menu, order, reservation, gallery, reviews, contact, legal mentions  
- Auth: register, login, logout  
- Admin area: menu administration pages

## Administrateur

**FR**  
Les pages admin se trouvent dans `code/src/pages/admin/` (ex. gestion du menu).  
L’API expose des routes de gestion sous des préfixes comme `/api/menu`, `/api/category`, etc. (voir la section API).

**EN**  
Admin pages live in `code/src/pages/admin/` (e.g. menu management).  
The API provides management routes under prefixes like `/api/menu`, `/api/category`, etc. (see API section).

## Utilisateurs

**FR**  
Parcours utilisateur : inscription/connexion, consultation du menu, réservation, contact, dépôt/consultation d’avis (selon les pages et routes disponibles).

**EN**  
User flows: register/login, browse the menu, reserve, contact, leave/view reviews (based on available pages and API routes).

## Language & technologies

**FR / EN**  
- Frontend: **Vite**, **React 19**, **React Router**  
- API: **Express** (TypeScript)  
- Databases: **MySQL** (tests/fixtures), **MongoDB** (config présent via env)  
- Tests: **Vitest** (+ couverture)  
- Lint/format: **Biome**

## Installation

### Pré-requis / Prerequisites

- **Node.js + npm**
- **MySQL** (nécessaire pour les tests/CI, et selon l’usage local)
- **MongoDB** (uniquement si les fonctionnalités qui l’utilisent sont activées)

> Note: il n’y a actuellement **pas** de `docker-compose.yml`/`Dockerfile` dans ce dépôt, donc les instructions Docker ont été retirées.

### Démarrage local / Local development

Toutes les commandes se lancent depuis le dossier `code/`.

```bash
cd code
npm ci
```

**FR**  
- Démarrer le front (Vite, port 5173) :

```bash
npm run dev
```

- Démarrer l’API (Express, port défini par `PORT`, par défaut 3000) :

```bash
npm run server
```

**EN**  
- Start frontend (Vite, port 5173):

```bash
npm run dev
```

- Start API (Express, port from `PORT`, default 3000):

```bash
npm run server
```

### Variables d’environnement / Environment variables

Les fichiers existent déjà :
- `code/.env.development` (développement)
- `code/.env.test` (tests)

Variables principales (selon les fichiers `.env`) :
- **API/Server**: `PORT`, `ORIGINS`
- **MySQL**: `MYSQL_HOST`, `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_DATABASE`
- **MongoDB**: `MONGODB_HOST`, `MONGODB_USER`, `MONGODB_PASSWORD`, `MONGODB_DATABASE`
- **Frontend (Vite)**: `VITE_API_URL`, `VITE_JWT_SECRET`
- **Files**: `PUBLIC_DIR`

**FR**  
Si vous lancez le front et l’API en local, vérifiez que `VITE_API_URL` pointe vers l’API (ex. `http://127.0.0.1:3000`) et que `ORIGINS` autorise `http://127.0.0.1:5173` / `http://localhost:5173`.

**EN**  
When running locally, ensure `VITE_API_URL` targets the API (e.g. `http://127.0.0.1:3000`) and `ORIGINS` allows `http://127.0.0.1:5173` / `http://localhost:5173`.

### Build / Production preview

```bash
cd code
npm run build
npm run preview
```

### Tests / CI

**FR**  
- Tests :

```bash
cd code
npm run test
```

- Couverture :

```bash
cd code
npm run test:coverage
```

La CI GitHub (voir `.github/workflows/ci.yaml`) compile le projet, démarre MySQL, importe des fixtures SQL depuis `code/mysql/` (`lechemin.test.sql`, `ia.test.sql`), puis exécute les tests.

**EN**  
- Run tests:

```bash
cd code
npm run test
```

- Coverage:

```bash
cd code
npm run test:coverage
```

GitHub CI (see `.github/workflows/ci.yaml`) builds the project, starts MySQL, imports SQL fixtures from `code/mysql/` (`lechemin.test.sql`, `ia.test.sql`), then runs the tests.

## Points d'accès - endpoints - de l'API REST

**FR / EN**  
Les routes API sont montées sous ces préfixes (voir `code/server/core/server.ts`) :

Méthode HTTP | Route (préfixe) | Description (FR / EN)
------------ | -------------- | ----------------------
* | `/api` | Routes générales (homepage/sécurité) / General routes (homepage/security)
* | `/api/menu` | Menu / Menu
* | `/api/category` | Catégories / Categories
* | `/api/drink_type` | Types de boisson / Drink types
* | `/api/drink` | Boissons / Drinks
* | `/api/orderable_spice` | Épices / Spices
* | `/api/orderable_type` | Types “orderable” / Orderable types
* | `/api/orderable` | Produits commandables / Orderable items
* | `/api/user` | Utilisateurs / Users
* | `/api/role` | Rôles / Roles
* | `/api/contact` | Contact / Contact
* | `/api/avis` | Avis / Reviews

## Documents des charges

**FR**  
Le dépôt mentionne un “cahier des charges”, mais le dossier `docs/` n’est pas présent actuellement.  
À ajouter : un lien vers le document (ex. `docs/cahier_des_charges.pdf` ou `docs/cahier_des_charges/`).

**EN**  
The repo references a “specification document”, but there is currently no `docs/` folder.  
To add: a link to the document (e.g. `docs/cahier_des_charges.pdf` or `docs/cahier_des_charges/`).