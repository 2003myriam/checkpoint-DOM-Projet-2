# 🎨 Checkpoint : Changeur de couleurs interactif

## 📌 Description

Ce projet consiste à créer une page web simple permettant de changer dynamiquement la couleur d'une boîte en cliquant sur un bouton.

Le projet est divisé en trois parties :
- **HTML** : structure de la page
- **CSS** : style et mise en forme
- **JavaScript** : interactivité

---

## 🧠 Fonctionnement

- Le fichier HTML crée une page avec :
  - un titre
  - une boîte colorée
  - un bouton

- Le fichier CSS applique un style de base aux éléments.

- Le fichier JavaScript :
  - génère une couleur aléatoire avec `getRandomColor()`
  - change la couleur de la boîte au clic sur le bouton

 ---

## ⚙️ Instructions

### 🧱 Configuration HTML

- Créer un nouveau fichier HTML
- Ajouter la structure de base d’un document HTML :
  - `<!DOCTYPE html>`
  - `<html>`
  - `<head>`
  - `<body>`
- Ajouter un titre à la page : **"Changeur de couleurs"**

---

### 🖥️ Création de l’interface

Dans la balise `<body>` :

- Créer un conteneur avec la classe `container`
- Ajouter un titre `<h1>` avec le texte **"Color Changer"**
- Créer une boîte avec l’identifiant `color-box`
- Ajouter un bouton avec l’identifiant `change-color-btn` et le texte **"Change Color"**

---

### 🎨 Styling avec CSS

- Créer un fichier CSS et le lier au fichier HTML
- Centrer le contenu du conteneur
- Ajouter une marge supérieure pour l’espacement
- Définir une largeur et une hauteur fixes pour la boîte
- Ajouter une couleur d’arrière-plan par défaut à la boîte
- Styliser le bouton pour qu’il soit visible et facile à cliquer

---

### ⚡ JavaScript pour l’interactivité

- Créer un fichier JavaScript et le lier au fichier HTML
- Attendre le chargement du DOM avec l’événement `DOMContentLoaded`
- Sélectionner les éléments avec leurs identifiants
- Créer une fonction qui génère une couleur aléatoire
- Ajouter un événement au bouton pour détecter le clic
- Lors du clic, changer la couleur de la boîte avec une couleur aléatoire

---

## 🧪 Test

- Ouvrir le fichier HTML dans un navigateur
- Cliquer sur le bouton
- Vérifier que la couleur de la boîte change dynamiquement

---

## 🎯 Objectif

- Comprendre les bases du DOM
- Utiliser les événements en JavaScript
- Manipuler dynamiquement le style CSS

---