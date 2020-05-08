FROM node:10-slim

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Install dependencies
RUN npm install && npm run build

COPY . .

# Expose service
EXPOSE 3000

CMD ["npm", "run", "start"]