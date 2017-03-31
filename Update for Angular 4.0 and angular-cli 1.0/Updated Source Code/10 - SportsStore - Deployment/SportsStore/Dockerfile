FROM node:6.9.1

RUN mkdir -p /usr/src/sportsstore

COPY dist /usr/src/sportsstore/app

COPY authMiddleware.js /usr/src/sportsstore/
COPY data.js /usr/src/sportsstore/
COPY deploy-server.js /usr/src/sportsstore/server.js
COPY deploy-package.json /usr/src/sportsstore/package.json

WORKDIR /usr/src/sportsstore

RUN npm install

EXPOSE 3000
EXPOSE 3500

CMD ["npm", "start"]
