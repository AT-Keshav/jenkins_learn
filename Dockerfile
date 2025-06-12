# Use official Node.js image
FROM node:20.11.1-alpine

# Update package manager and install security updates
RUN apk update && apk upgrade

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose port
EXPOSE 8000

# Start the app
CMD [ "node", "index.js" ]
