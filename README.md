# Simulateur de Lactation

Ce simulateur permet de modéliser et visualiser la production laitière d'un troupeau en fonction de différents paramètres et profils de production.

## Fonctionnalités

- Configuration des paramètres de production (nombre de VL, production totale, IVV, etc.)
- Choix parmi 8 profils de production différents avec descriptions
- Visualisation des courbes de lactation pour vaches et génisses
- Répartition des vêlages sur l'année
- Calcul et visualisation de la production mensuelle
- Calcul du chiffre d'affaires en fonction des prix du lait
- Comparaison de deux scénarios différents

## Installation

1. Clonez ce dépôt
2. Ouvrez le fichier `index.html` dans votre navigateur

Ou utilisez le serveur Python inclus :

```bash
python server.py
```

## Utilisation

1. Configurez les paramètres de production dans la section "Configuration"
2. Répartissez les vêlages dans le tableau "Répartition des Vêlages"
3. Ajustez les prix du lait si nécessaire
4. Observez les résultats dans les graphiques et tableaux

## Calculs

- Production par VL/an = Production totale / Nombre de VL
- Production vaches (VL 2 lactations et +) = Production par VL / (1 - Taux de renouvellement + Production génisses (%) * Taux de renouvellement)
- Production génisses (VL 1ère lactation) = Production vaches * Production génisses (%)
- Production mensuelle = Somme des productions journalières * 30.5 jours

## Licence

Ce projet est sous licence MIT.