# YnovBank

YnovBank est une application web bancaire simple permettant aux utilisateurs de se connecter et d'effectuer des virements. Ce projet met en œuvre une pipeline CI/CD automatisée, Gitflow pour la gestion des branches, et semantic-release pour le versionnement.

---

## Contexte

> "Développer l'application web YnovBank, une plateforme bancaire simple permettant aux utilisateurs de se connecter et d'effectuer des virements, avec une pipeline CI/CD automatisée sur GitLab, utilisant Gitflow pour la gestion des branches et semantic-release pour le versionnement."

Ce projet a été réalisé dans le cadre du module CI/CD et DevOps. L'objectif était de mettre en place une application complète, industrialisée et déployable automatiquement.

---

## Spécifications techniques

- **Backend** : Node.js (AdonisJS, API REST)
- **Frontend** : React, Vite, TypeScript, Tailwind , Shadcn/UI
- **Base de données** : MySQL
- **Tests** : Jest pour les tests unitaires et d'intégration
- **Docker** : Dockerfile pour le client et le serveur, orchestration via docker-compose
- **Artifact** : Images Docker publiées sur Docker Hub ([doxteurn/ynovbank-frontend](https://hub.docker.com/r/doxteurn/ynovbank-frontend), [doxteurn/ynovbank-backend](https://hub.docker.com/r/doxteurn/ynovbank-backend))
- **CI/CD** : GitHub Actions (pipeline automatisée avec build, test, push Docker, déploiement SSH)
- **Versionnement** : semantic-release avec Conventional Commits
- **Déploiement** : Serveur VPS (production sur main)
- **Notifications** : Envoi d'emails via GitHub Actions

---

## Organisation du projet

- `client/` : Frontend React (Vite, TypeScript)
- `server/` : Backend AdonisJS (Node.js)
- `docker-compose.yml` : Orchestration multi-conteneurs (MySQL, backend, frontend)
- `.github/workflows/release.yml` : Pipeline CI/CD GitHub Actions
- `Dockerfile` dans chaque dossier (client/server)

---

## Gestion des branches (Gitflow)

> "utilisant Gitflow pour la gestion des branches"

- **main** : Production
- **dev** : Intégration continue (staging)
- **feature/** : Nouvelles fonctionnalités
- **release/** : Préparation des releases
- **hotfix/** : Corrections urgentes

Toutes les fonctionnalités sont développées sur des branches `feature/`, puis mergées sur `dev`, puis sur `main`.

---

## CI/CD (GitHub Actions)

> "pipeline CI/CD automatisée sur GitLab"

- **Build** : Compilation du frontend et du backend
- **Test** : Lancement des tests unitaires et d'intégration (Jest)
- **Scan sécurité** : (optionnel) Ajout possible avec des actions comme Snyk
- **Artifact** : Build et push des images Docker sur Docker Hub
- **Release** : semantic-release gère le versionnement et le changelog
- **Deploy** : Déploiement automatique sur le serveur via SSH après chaque push sur main

Le pipeline est défini dans `.github/workflows/release.yml`.

---

## Versionnement (semantic-release & Conventional Commits)

> "semantic-release avec Conventional Commits pour générer des versions"

- Les commits suivent la convention :
  - `feat: ...` pour les nouvelles fonctionnalités
  - `fix: ...` pour les corrections de bugs
  - `chore: ...` pour la maintenance
  - `docs: ...` pour la documentation
- semantic-release analyse les commits et génère automatiquement :
  - Le numéro de version (major, minor, patch)
  - Le changelog
  - Les tags Git

---

## Docker & Artefacts

> "Artifact : Docker hub ou gitlab registry"

- Les images Docker sont buildées et poussées automatiquement sur Docker Hub :
  - [doxteurn/ynovbank-frontend](https://hub.docker.com/r/doxteurn/ynovbank-frontend)
  - [doxteurn/ynovbank-backend](https://hub.docker.com/r/doxteurn/ynovbank-backend)
- Le déploiement en production se fait en pullant ces images.

---

## Déploiement

> "Déploiement : VPS Hostinger"

- **Production** : Déploiement automatique sur un VPS via SSH après chaque push sur main
- **Commandes utilisées** :
  - `docker-compose pull && docker-compose up -d` pour mettre à jour les services

---

## Notifications

> "Notifications : Emails envoyés à jeanchristophe.tchokomeni@ynov.com"

---

## Exemple de workflow CI/CD (`.github/workflows/release.yml`)


---

## Lien vers le repo public

> "Lien vers repo Git"

- [https://github.com/Doxteur/Ybank](https://github.com/Doxteur/Ybank)

---

## Pour aller plus loin

- **Tests** : Lancer `yarn test` dans chaque dossier pour exécuter les tests Jest
- **Déploiement local** :
  Il faut configurer le fichier .env dans le dossier server avec les bonnes variables d'environnement.
  ```bash
  docker-compose up --build
  ```
---

## Projets (Code, Dockerfile, Explication)

- Tout le code source est disponible dans ce repo
- Les Dockerfile sont présents dans `client/` et `server/`
- Le pipeline CI/CD est dans `.github/workflows/release.yml`
- Ce README explique l'organisation, le workflow, et le déploiement

---

**Contact** : [Doxteur sur GitHub](https://github.com/Doxteur)
[E-mail](mailto:jimmydoussain@gmail.com)
