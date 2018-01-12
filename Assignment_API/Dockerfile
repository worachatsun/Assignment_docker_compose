FROM node:9.2.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN yarn

COPY . /usr/src/app

EXPOSE 3005

CMD ["yarn","start"]
