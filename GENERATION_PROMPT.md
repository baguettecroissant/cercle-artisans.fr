# Prompt pour le Script de Génération de Contenu Hyper-Local

Utilisez ce prompt avec un LLM (GPT-4, Claude 3.5 Sonnet, etc.) via un script Python ou Node.js pour remplir le fichier `src/data/generated-local-content.json`.

---

## CONTEXTE
Tu es un expert en SEO local et en rédaction web pour artisans.
Nous devons générer du contenu unique pour des milliers de pages [Service + Ville] afin d'éviter le "Duplicate Content".

## FORMAT D'ENTRÉE (Exemple)
Liste de villes : Paris, Marseille, Lyon...
Liste de services : Plombier, Électricien...

## TÂCHE
Pour chaque ville de la liste, génère un objet JSON contenant :
1. **intro** : Une intro unique de 50 mots parlant de la ville (citer des quartiers précis, l'ambiance, monuments). Le ton doit être professionnel mais ancré localement.
2. **localTip** : Un conseil spécifique lié à la ville (ex: contraintes d'urbanisme du centre historique, aides de la mairie pour la rénovation, gestion du stationnement pour les travaux).
3. **historyAnecdote** : Une phrase courte de contexte historique ou culturel pour ancrer la page.
4. **localFaq** : Une question/réponse spécifique à la ville (ex: "Peut-on installer X dans le quartier Y ?").

## FORMAT DE SORTIE (JSON STRICT)
La clé doit être sous la forme : `service_slug-ville_slug`.

```json
{
  "plombier-bordeaux": {
    "intro": "Bordeaux, avec ses échoppes traditionnelles et ses immeubles en pierre de taille, demande une expertise particulière...",
    "localTip": "Dans le secteur sauvegardé de Bordeaux, toute modification de façade pour évacuation nécessite l'aval de l'ABF.",
    "historyAnecdote": "Le Port de la Lune est classé au patrimoine mondial de l'UNESCO.",
    "localFaq": {
      "question": "Intervenez-vous dans les rues piétonnes du centre ?",
      "answer": "Oui, nos véhicules ont les autorisations d'accès pour le centre piétonnier de Bordeaux."
    }
  },
  ...
}
```

## CONTRAINTES
- Le ton doit être **expert** et **rassurant**.
- Varie les structures de phrases pour chaque ville.
- Ne pas inventer de fausses réglementations, rester sur des conseils plausibles (stationnement, bruit, horaires).
