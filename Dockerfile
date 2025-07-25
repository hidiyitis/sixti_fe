# Stage 1: Build stage
FROM node:18-alpine as builder

WORKDIR /app

# Copy package files first untuk memanfaatkan layer caching
COPY package*.json ./
COPY .npmrc ./

# Install semua dependencies termasuk devDependencies
RUN npm install

# Copy semua file proyek
COPY . .

# Build aplikasi Nuxt 3
RUN npm run build

# Stage 2: Production stage
FROM node:18-alpine

WORKDIR /app

# Install hanya production dependencies
COPY --from=builder /app/package*.json ./
RUN npm install --production

# Copy hasil build dan file yang diperlukan
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/public ./public
COPY --from=builder /app/nuxt.config.ts .

# Expose port (default Nuxt 3000)
EXPOSE 3000

# Environment variable untuk production
ENV NODE_ENV=production

# Perintah untuk menjalankan aplikasi
CMD ["node", ".output/server/index.mjs"]
