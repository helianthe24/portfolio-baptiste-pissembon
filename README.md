# Portfolio Baptiste Pissembon

> Portfolio professionnel de développeur web, présentant mes compétences et projets dans le cadre de ma formation OpenClassrooms.

## 🌐 Accès au site

**Site en ligne :** [portfolio-baptiste-pissembon.vercel.app](https://portfolio-baptiste-pissembon.vercel.app)

## 📋 Description du projet

Ce portfolio a été développé dans le cadre du **Projet 8 - OpenClassrooms** : "Créez et publiez votre portfolio de développeur". Il présente mon parcours atypique du fleuriste au développeur web, mes compétences techniques et mes projets phares.

### Objectifs pédagogiques

- Créer un site web professionnel et accessible
- Démontrer les compétences techniques acquises
- Optimiser les performances et le SEO
- Déployer en ligne avec CI/CD

## 🚀 Technologies utilisées

### Frontend

- **Next.js 13** - Framework React avec SSG/SSR
- **React 18** - Interface utilisateur interactive
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides et performances
- **next-themes** - Gestion du thème sombre/clair

### Développement

- **TypeScript** - Typage statique pour la robustesse
- **ESLint + Prettier** - Qualité et cohérence du code
- **Git + GitHub** - Versioning et collaboration

### Déploiement

- **Vercel** - Hébergement avec déploiement automatique
- **GitHub Actions** - CI/CD pour la qualité

## ✨ Fonctionnalités principales

### 🎨 Interface & UX

- **Design responsive** - Optimisé mobile, tablette, desktop
- **Mode sombre/clair** - Basculement fluide avec persistance
- **Animations subtiles** - Transitions au scroll avec Framer Motion
- **Navigation intuitive** - Menu adaptatif et breadcrumbs

### 🔍 SEO & Performance

- **Meta tags optimisés** - Open Graph, Twitter Cards
- **Structure JSON-LD** - Données structurées pour les moteurs
- **Sitemap automatique** - Indexation facilitée
- **Images optimisées** - WebP avec fallbacks
- **Lighthouse 95+** - Performance, accessibilité, SEO

### ♿ Accessibilité (WCAG 2.1 AA)

- **Navigation clavier** - Tous les éléments accessibles au Tab
- **Lecteurs d'écran** - Labels ARIA et structure sémantique
- **Contrastes élevés** - Lisibilité pour tous
- **Skip links** - Raccourcis vers le contenu principal

### 🛠 Architecture technique

- **Données structurées** - JSON pour les projets et compétences
- **Composants réutilisables** - Architecture modulaire
- **Types TypeScript** - Sécurité et documentation du code
- **Git conventionnel** - Commits sémantiques

## 🗂 Structure du projet

```
portfolio-baptiste-pissembon/
├── components/           # Composants React réutilisables
│   ├── ui/              # Composants UI de base (Button, etc.)
│   ├── Header/          # Navigation principale
│   ├── Footer/          # Pied de page avec liens
│   ├── Hero/            # Section d'accueil animée
│   ├── WorkCard/        # Cartes de projets
│   └── SkillCard/       # Cartes de compétences
├── pages/               # Pages Next.js (routing automatique)
│   ├── index.js         # Page d'accueil
│   ├── projects/        # Page et détails des projets
│   ├── parcours.jsx     # Mon parcours personnel
│   └── resume.js        # CV interactif
├── data/                # Données structurées
│   ├── projects.json    # Projets avec détails techniques
│   ├── skills.json      # Compétences par catégories
│   └── portfolio.json   # Informations personnelles
├── public/              # Assets statiques
│   ├── images/          # Images optimisées par projet
│   ├── sitemap.xml      # Plan du site
│   └── robots.txt       # Instructions pour les robots
└── styles/              # Styles globaux et thèmes
```

## 📱 Pages et sections

### 🏠 Accueil

- **Hero animé** avec présentation personnelle
- **Projets phares** avec liens vers les détails
- **Compétences techniques** organisées par catégories
- **À propos** avec mon approche du développement

### 💼 Projets

- **Vue d'ensemble** avec filtres par technologie
- **Pages détaillées** pour chaque projet :
  - Présentation et contexte
  - Défis techniques rencontrés
  - Solutions implémentées
  - Résultats et apprentissages
  - Perspectives d'amélioration
  - Liens vers démo et code source

### 🎯 Parcours

- **Avant/Contexte** : Du fleuriste au développeur
- **Le déclic** : Passion pour la technologie
- **Formation & Avenir** : Vision professionnelle

### 📄 CV

- **Expériences** formatées et lisibles
- **Formation** avec détails OpenClassrooms
- **Compétences** techniques organisées

## 🎨 Choix de design

### Palette de couleurs

- **Base neutre** : Tons de gris pour la lisibilité
- **Accent principal** : Bleu moderne et professionnel
- **Contraste élevé** : Conformité accessibilité WCAG
- **Mode sombre** : Réduction de la fatigue visuelle

### Typographie

- **Epilogue** - Police moderne et lisible
- **Hiérarchie claire** - Tailles et poids cohérents
- **Espacement optimisé** - Lecture confortable

### Animations

- **Framer Motion** pour les transitions fluides
- **Apparition au scroll** - Révélation progressive du contenu
- **Micro-interactions** - Feedback utilisateur subtil
- **Performance** - Optimisations GPU et 60fps

## ⚡ Performance & Optimisation

### Scores Lighthouse

- **Performance : 95+**
- **Accessibilité : 100**
- **Bonnes pratiques : 95+**
- **SEO : 100**

### Optimisations techniques

- **Next.js Image** - Lazy loading et formats modernes
- **Code splitting** - Chargement à la demande
- **SSG** - Génération statique pour la vitesse
- **Compression** - Assets minifiés et optimisés

## 🛠 Installation et développement

### Prérequis

- Node.js 18+ et npm/yarn
- Git pour le versioning

### Installation locale

```bash
# Cloner le repository
git clone https://github.com/helianthe24/portfolio-baptiste-pissembon.git
cd portfolio-baptiste-pissembon

# Installer les dépendances
npm install
# ou
yarn install

# Lancer le serveur de développement
npm run dev
# ou
yarn dev
```

Le site sera accessible sur `http://localhost:3000`

### Scripts disponibles

```bash
npm run dev        # Serveur de développement
npm run build      # Build de production
npm run start      # Serveur de production
npm run lint       # Vérification ESLint
npm run lint:fix   # Correction automatique ESLint
```
