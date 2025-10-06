# ----------- Base Stage (common for dev & prod) -----------
FROM node:20-alpine AS base

# Create a non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copy package.json first to leverage Docker cache
COPY package*.json ./

# Set default user
USER appuser

# ----------- Development Stage -----------
FROM base AS development

# Switch back to root temporarily to install dependencies
USER root
RUN npm install
USER appuser

# Copy source code
COPY . .

# Expose development port
EXPOSE 5000

# Command for development
CMD ["npm", "run", "dev"]

# ----------- Production Stage -----------
FROM base AS production

# Switch to root to install production dependencies
USER root
RUN npm ci --only=production
USER appuser

# Copy source code from base (or development stage)
COPY --from=development /app /app

# Expose production port
EXPOSE 5000

# Command for production
CMD ["node", "index.js"]
