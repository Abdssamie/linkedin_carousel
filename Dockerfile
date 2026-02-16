# Multi-stage Docker build for Remotion server
# Uses bun for faster builds and smaller images

FROM oven/bun:1-slim AS base

# Install Chrome dependencies (official Remotion list)
RUN apt-get update && apt install -y \
  libnss3 \
  libdbus-1-3 \
  libatk1.0-0 \
  libgbm-dev \
  libasound2 \
  libxrandr2 \
  libxkbcommon-dev \
  libxfixes3 \
  libxcomposite1 \
  libxdamage1 \
  libatk-bridge2.0-0 \
  libpango-1.0-0 \
  libcairo2 \
  libcups2 \
  && rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Expose the server port
EXPOSE 8000

# Run the server
CMD ["bun", "run", "server"]
