# Our Date 💌

Site mobile pour proposer un choix de date à quelqu'un — construit   avec
Next.js, Tailwind CSS et Supabase.

## Ce que tu as reçu

- Toutes les pages du parcours : accueil → choix des activités → favori →
  idée perso → envoi
- Un dashboard privé `/admin` protégé par mot de passe
- Les photos des 10 activités viennent d'Unsplash (libres de droit, juste
  en attendant tes propres photos — voir plus bas comment les remplacer)

## 1. Créer les comptes (tu l'as déjà commencé 👍)

- **GitHub** — pour héberger le code
- **Vercel** (vercel.com) — connecte-toi avec GitHub, hébergement gratuit
- **Supabase** (supabase.com) — connecte-toi avec GitHub, base de données gratuite

## 2. Mettre le code sur GitHub

Dans le dossier du projet :

```bash
git init
git add .
git commit -m "Our Date"
git branch -M main
git remote add origin https://github.com/TON-USER/our-date.git
git push -u origin main
```

(Crée d'abord un repo vide `our-date` sur GitHub, sans README, pour avoir
l'URL à mettre dans `remote add`.)

## 3. Configurer Supabase

1. Crée un nouveau projet Supabase
2. Va dans **SQL Editor** et lance ceci pour créer la table :

```sql
create table responses (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  activities_selected text[] not null,
  favorite_activity text not null,
  custom_idea text default ''
);

-- Sécurité : personne ne peut lire/écrire directement depuis le
-- navigateur. Seul le serveur Next.js (avec la service role key) accède
-- à cette table.
alter table responses enable row level security;
```

3. Va dans **Settings > API**, tu auras besoin de deux valeurs :
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `service_role` key (⚠️ à garder secrète, jamais dans le code exposé
     au navigateur) → `SUPABASE_SERVICE_ROLE_KEY`

## 4. Déployer sur Vercel

1. Sur vercel.com → **Add New Project** → importe le repo `our-date`
2. Dans **Environment Variables**, ajoute :

| Nom | Valeur |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | ton Project URL Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | ta service_role key Supabase |
| `ADMIN_PASSWORD` | le mot de passe de ton choix pour `/admin` |

3. Clique **Deploy**. Tu obtiens ton lien du style `our-date.vercel.app`.

## 5. Tester en local (optionnel)

```bash
npm install
cp .env.example .env.local   # puis remplis les vraies valeurs dedans
npm run dev
```

Ouvre `http://localhost:3000` sur ton téléphone (même wifi) ou dans les
outils de dev du navigateur en mode mobile.

## 6. Remplacer les photos par les tiennes

Les photos actuelles viennent d'Unsplash, juste pour que le design soit
complet tout de suite. Pour mettre tes propres photos :

1. Ajoute tes images dans `public/activities/` (ex: `karting.jpg`)
2. Dans `lib/activities.ts`, remplace la ligne `image: "https://..."` de
   chaque activité par `image: "/activities/karting.jpg"`

## 7. Voir les réponses

Va sur `our-date.vercel.app/admin`, entre le mot de passe défini dans
`ADMIN_PASSWORD`. Chaque réponse envoyée apparaît avec la date, les
activités cochées, le favori et l'idée perso éventuelle.

## Structure du projet

```
app/
  page.tsx                 → accueil
  choose/page.tsx          → sélection multiple des activités
  favorite/page.tsx        → sélection du favori
  idea/page.tsx            → idée personnelle libre
  submit/page.tsx          → envoi + message de confirmation
  admin/page.tsx           → dashboard privé (protégé par mot de passe)
  api/submit/route.ts      → enregistre une réponse dans Supabase
  api/admin-login/route.ts → vérifie le mot de passe admin
lib/
  activities.ts            → les 10 activités (titre, phrase, photo)
  answers.ts                → stocke les réponses en cours dans le
                              navigateur (localStorage) le temps du parcours
components/
  FloatingHearts.tsx        → décoration animée discrète
  Progress.tsx              → petits points de progression en haut
  AdminLogin.tsx            → formulaire de connexion admin
```

## Notes de sécurité

- Le mot de passe admin est simple par design (demande explicite), mais
  reste privé : il n'apparaît jamais dans le code, seulement dans les
  variables d'environnement Vercel.
- La clé Supabase `service_role` n'est utilisée que côté serveur (dans les
  fichiers `api/*/route.ts` et `admin/page.tsx`), jamais envoyée au
  navigateur.
