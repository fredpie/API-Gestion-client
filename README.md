# API

**Assurez-vous d'utiliser la version Node 20.17.0 ou supérieur**

Ce projet est un Test technique pour SoumissionRénovation.ca. Il s'agit d'une API RESTful conçue pour gérer des projets de rénovation, incluant les entités suivantes :

- **Projet :** Informations générales sur le projet (nom, description, dates, budget, etc.).
- **Client :** Informations sur le client (prénom, nom, email, coordonnées).
- **Entrepreneur :** Informations sur l'entrepreneur (prénom, nom, email, coordonnées).

#### L'API est construite avec les technologies suivantes :

- **NestJS :** Framework backend Node.js.
- **Prisma :** ORM pour interagir avec la base de données.
- **PostgreSQL :** Base de données relationnelle.
- **Docker :** Pour la gestion de la base de données PostgreSQL.
- **TypeScript :** Langage de programmation utilisé dans le projet.

# -------------------------------

## Installation du projet

##### 1. Dans un répertoire de votre choix, cloner le projet depuis GitHub

```bash
  git clone git@github.com:fredpie/soumission-renovation.git
  cd nom-du-projet
```

##### 2. Installer les dépendances du projet à l'aide de npm

```bash
 npm install
```

##### 3. Créer une fichier .env

Créer un fichier .env
```bash
touch .env
```

Mettre l'instruction suivante
```bash
 DATABASE_URL="postgresql://postgres:dev@localhost:5432/soumission-renovation?schema=public"
```

##### 4. Configurer Docker pour PostgreSQL

_Assurez-vous que Docker Desktop est en cours d'exécution. Démarrez le conteneur PostgreSQL à l'aide de Docker Compose :_

```bash
docker-compose up -d
```

##### 5. Générer le Client Prisma et Effectuer les Migrations

_Générez le client Prisma et appliquez les migrations à la base de données :_

```bash
npx prisma migrate dev --name init
```

##### 6. Peupler la base de données avec les données test

Assurez-vous que ts-node est bien installer

```bash
npm install ts-node --save-dev
```
Lancer la procédure
```bash
npm run prisma:seed
```

## Démarrage de l'application

### Démarrez l'application en mode Dev

```bash
npm run start:dev
```

### Démarrez l'application en mode Prod

```bash
npm run build
npm run start:prod
```

### Documentation de l'API

Une documentation interactive de l'API est disponible via Swagger :

```bash
http://localhost:3000/api
```

Vous pouvez utilisez une application comme Postman ou Insomnia pour tester l'API. L'URL de base sera

```bash
http://localhost:3000/
```

### Database dans le navigateur

Utiliser Prisma studio dans le navigateur pour obtenir un visuel de la base de donné

```bash
npx prisma studio
```
