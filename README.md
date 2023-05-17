# Bonjour à tous ! 👋

#### Je suis Maxime DROUAULT,
Ceci est mon premier projet en React. J'ai réalisé l'ensemble de ce projet, je me suis basé sur la maquette Figma que vous pouvez retrouver avec le lien suivant :
<a href='https://www.figma.com/file/bk8zXftCb0vgkO9ebtaec2/UI-Design-Kasa-FR?type=design&node-id=0%3A1&t=k8bfSs3Gmqh2JcB7-1' target="_blank">Lien vers la maquette Figma</a>

<a href="https://maxime-drouault-kasa.vercel.app/" target="_blank">
  <img src="https://maximedrouault.vercel.app/img/kasa.jpg" alt="Capture du site web Kasa" />
</a>

##### Voici les étapes qui m'ont permis de réaliser ce projet :
- La base a été initialisée à l'aide de **CREATE REACT APP (CRA)**.
- Les logements du site sont générés via un fichier **JSON** qui contient les **DATAS**. Ceux-ci sont importés via **Fetch** encapsulé dans un **useEffect**.
- **REACT ROUTER** a été utilisé pour la gestion du routing du site. Pages "404", renvoi de l'id via l'URL pour sélectionner la fiche logement concernée et afficher les informations détaillées.
- Des composants réutilisables ont été définis dans plusieurs fichiers.
- Un **CARROUSSEL** a également été créé pour afficher les différentes photos du logement. Il est possible de le faire défiler manuellement et je l'ai aussi mis avec un **TIMER** encapsulé dans un **useEffect** pour son défilement automatique.

##### Une attention toute particulière a été apportée aux éléments suivants :
- Que le routing se fasse correctement, y compris par exemple, quand l'id d'un logement est inconnu, le renvoi vers la page "404" se fait bien.
- Le découpage des composants est fait de telle manière que le code reste **lisible**, **facilement compréhensible** et **maintenable**.
- Le composant **COLLAPSE** fonctionne correctement avec son effet de **transition**.
- Les mises en pages **RESPONSIVE** sont correctes, quelle que soit la taille d'affichage.

###### Les compétences et technologies mises en œuvre sur ce projet sont les suivantes :

![HTML](https://img.shields.io/badge/HTML-%23FFac45.svg?&style=for-the-badge&logo=html5&logoColor=white&color=orange)
![CSS](https://img.shields.io/badge/CSS-%23FFac45.svg?&style=for-the-badge&logo=css3&logoColor=white&color=blue)
![JavaScript](https://img.shields.io/badge/JAVASCRIPT-%23FFac45.svg?&style=for-the-badge&logo=javascript&logoColor=white&color=yellow)
![FIGMA](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![REACT](https://img.shields.io/badge/React-005C84?style=for-the-badge&logo=react&logoColor=white)
![REACT ROUTER](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![RESPONSIVE](https://img.shields.io/badge/RESPONSIVE-18A303?&style=for-the-badge&logo=RESPONSIVE&logoColor=white&color=18A303)


#### Je vous propose de voir mon portfolio pour voir ce que je fais avec le lien juste ci-dessous (ME WEBSITE).

<a href='https://maximedrouault.vercel.app/' target="_blank"><img alt='Mon site Portfolio' src='https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white'/></a>
<a href='https://www.linkedin.com/in/maximedrouault/' target="_blank"><img alt='Linkedin' src='https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white'/></a>
<a href='https://github.com/maximedrouault' target="_blank"><img alt='Github' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'/></a>

#### Si vous voulez tester le projet de votre côté, voici les instructions :<br>
- Clonez le dépôt :<br>
**`git clone https://github.com/maximedrouault/Kasa.git`**
- À partir du répertoire **Kasa** :<br>
- Faites **`NPM INSTALL`** puis **`NPM START`**, cela permettra d'installer les dépendances du projet et de démarrer celui-ci.
- Ensuite, le site devrait s'ouvrir tout seul. Si ce n'est pas le cas, vous pouvez y accéder à cette URL : **http://localhost:3000**.<br>
Vous pourrez ainsi accéder à toutes les fonctionnalités.
