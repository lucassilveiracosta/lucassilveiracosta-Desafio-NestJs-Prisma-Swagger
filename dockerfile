FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

RUN find dist -name "main.js"

EXPOSE 3000

CMD ["sh", "-c", "node $(find dist -name main.js)"]