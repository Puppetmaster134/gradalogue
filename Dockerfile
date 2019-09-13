FROM node:12-alpine

WORKDIR /usr/app

COPY package*.json /usr/app/
RUN npm install

COPY *.js /usr/app/
COPY src /usr/app/src
COPY components /usr/app/components
COPY pages /usr/app/pages
COPY public /usr/app/public
COPY styles /usr/app/styles

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
