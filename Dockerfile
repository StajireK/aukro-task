# Use the official Node.js image as the base image
FROM node:latest as build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire Angular app to the container
COPY . .

# Build the Angular app
RUN npm run build --prod

# Use a smaller NGINX image as the final base image
FROM nginx:alpine

# Copy the built Angular app from the previous stage to the NGINX server
COPY --from=build /app/dist/aukro-task /usr/share/nginx/html

# Expose the port used by NGINX (default is 80)
EXPOSE 80

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]