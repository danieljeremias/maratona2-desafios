FROM node:14.1-alpine

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Install dependencies
RUN npm install

# Expose service
EXPOSE 3000

# Start service
CMD [ "npm", "run", "start" ]