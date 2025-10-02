# Use a Node.js base image (Alpine is light)
FROM node:22-alpine

# Create a non-root 'app' user and group for security
RUN addgroup app && adduser -S -G app app

# Set the working directory
WORKDIR /app

# Copy package files (for Docker cache efficiency)
COPY package*.json ./

# Install dependencies as the non-root user
USER app

# Switch back to root temporarily for ownership cleanup
# Note: This step is often overridden by volume mounts, but good practice for internal files.
USER root
RUN chown -R app:app .

# Switch back to the non-root user for running the application
USER app
RUN npm install


# Copy application source code
COPY . .

# Expose the Vite default port
EXPOSE 5173

# Command to run the development server
CMD ["npm", "run", "dev"]