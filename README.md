# Déploiement  

Le déploiement de ce projet Angular ce réalise automatiquement lors d'un push sur les branches production, pre-production et dev.
Nous pouvons donc distinguer ces différents environnements : 
 - production (pour la version en production)
 - pre-production (pour la version test du client)
 - dev (pour la version de test)


Nous utilisons le même fichier yaml pour les 3 environements, en fonction de la branche trigger les paramètres de build seront mit à jour.
Nous pouvons facilement ajouter un environement en modifiant le fichier yaml :

```YAML
trigger:
- production
- pre-production
- dev
- MY_NEW_ENV # Ajout d'un nouvel environement

variables:
  ${{ if eq(variables['Build.SourceBranch'], 'refs/heads/production') }}:
    buildConfiguration: 'prod'
  ${{ if eq(variables['Build.SourceBranch'], 'refs/heads/pre-production') }}:
    buildConfiguration: 'preprod'
  ${{ if eq(variables['Build.SourceBranch'], 'refs/heads/dev') }}:
    buildConfiguration: 'test'
  ${{ if eq(variables['Build.SourceBranch'], 'refs/heads/dev') }}:
    buildConfiguration: 'my-new-env-branch' # Ajout de la branche du nouvel environement
```


Dans Angular.json, il faut ajouter un nouvel environement :

```JSON
"configurations": {
    "production": {
        "browserTarget": "OnDijon:build:production"
    },
    "development": {
        "browserTarget": "OnDijon:build:development"
    },
    "test": {
        "browserTarget": "OnDijon:build:test"
    }
}
```


Le fichier YAML build l'application Angular et la dépose dans un storage account hebergé sur Azure.