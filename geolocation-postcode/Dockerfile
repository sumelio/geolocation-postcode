FROM node:15.3.0
WORKDIR /app
EXPOSE 8200

ADD package.json package-lock.json /app/
COPY . /app/

CMD [ "node", "./src/index.js" ]