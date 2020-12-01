FROM node:15.3.0
WORKDIR /app
EXPOSE 8100

ADD package.json package-lock.json /app/
COPY . /app/
RUN npm install && npm run build
CMD [ "node", "."]