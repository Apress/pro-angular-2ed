FROM node:6.9.1

RUN mkdir -p /usr/src/sportsstore/app
WORKDIR /usr/src/sportsstore

COPY sportsstore.min.js /usr/src/sportsstore/app/
COPY index.html /usr/src/sportsstore/app/
COPY authMiddleware.js /usr/src/sportsstore/
COPY data.js /usr/src/sportsstore/
COPY deploy/server.js /usr/src/sportsstore/

COPY deploy/package.json /usr/src/sportsstore/
RUN npm install

EXPOSE 3000
EXPOSE 3500

CMD ["npm", "start"]
