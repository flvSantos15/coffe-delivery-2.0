FROM node:18-alpine

WORKDIR /app

RUN mkdir -p .next node_modules

COPY package*.json ./

RUN npm ci

COPY . .

RUN chown -R node:node /app

USER node

CMD ["npm", "run",  "dev"]