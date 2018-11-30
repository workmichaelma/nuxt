FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN hash -r
RUN npm install -g npm@latest
RUN npm install

EXPOSE 3000

CMD npm run dev