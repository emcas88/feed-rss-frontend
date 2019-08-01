FROM node:12.7.0-alpine

WORKDIR /app
COPY . ./
RUN npm install

ENTRYPOINT [ "npm", "start" ]
