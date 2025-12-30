#!/bin/bash

set -e

echo "🚀 Starting DevShram SSR Server"
echo "================================"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm ci --production
fi

# Check if .next exists
if [ ! -d ".next" ]; then
  echo "❌ Error: .next directory not found!"
  echo "Please ensure you extracted the full artifact."
  exit 1
fi

# Set production environment
export NODE_ENV=production

# Get port from environment or use default
PORT=${PORT:-3000}

echo "✅ Starting server on port ${PORT}..."
echo ""

# Start the Next.js server
npm start
