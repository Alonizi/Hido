FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# copy both to the container
COPY package*.json ./

# install packages to the container
RUN npm install

# copy everything
COPY . .

# generate the prisma database client
RUN npx prisma generate

# run the dev app - prod is not currently Dockerised
CMD [ "npm", "run", "migrate" ]
