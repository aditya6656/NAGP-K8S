# Use the official Node.js 14 image as base
FROM node:14

# Set working directory inside the container
WORKDIR /server

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 8080
EXPOSE 8080

# Command to run the Node.js application
CMD ["node", "server.js"]