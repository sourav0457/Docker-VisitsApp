# Specifying the base image
FROM node:12.18.4-alpine

# Specifying the working directory inside the container
WORKDIR /usr/app

# Copying pakage.json and installing all dependencies
COPY ./package.json ./
RUN npm install

# Copying rest of the files relative to the build context
COPY ./ ./

# Specifying the start-up command for the container
CMD ["npm", "start"]