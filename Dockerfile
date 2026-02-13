# On utilise la dernière version stable de Node (celle qui te manquait !)
FROM node:22-alpine

# On définit le dossier de travail dans le conteneur
WORKDIR /app

# On copie les fichiers de config
COPY package*.json ./

# On installe les dépendances DANS le conteneur
RUN npm install

# On copie le reste du projet
COPY . .

# On expose le port de SvelteKit
EXPOSE 5173

# IMPORTANT : on ajoute "--host" pour que le site soit accessible depuis Windows
CMD ["npm", "run", "dev", "--", "--host"]