FROM node:5.2.0-slim
MAINTAINER nico@zandomeneghi.at
WORKDIR /app
COPY ./package.json /app/package.json
RUN npm install
COPY ./src /app/src
ENTRYPOINT ["node", "src/index.js"]