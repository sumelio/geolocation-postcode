FROM node:15.3.0
WORKDIR /app
EXPOSE 8100

ADD package.json package-lock.json /app/
COPY . /app/

CMD [ "node", "--max-old-space-size=4096", "."]