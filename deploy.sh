# Quick deployment script for VPS

echo "=== LinkedIn Post Generator Deployment ==="
echo ""
echo "This will build and deploy the Docker container."
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker not found. Installing..."
    curl -fsSL https://get.docker.com | sh
    sudo usermod -aG docker $USER
    echo "Please log out and back in, then run this script again."
    exit 1
fi

# Check if docker-compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "Installing docker-compose..."
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
fi

echo "Building Docker image (this may take 10-15 minutes)..."
docker-compose build

echo "Starting container..."
docker-compose up -d

echo ""
echo "=== Deployment Complete ==="
echo "Server is running on port 8000"
echo ""
echo "Test with:"
echo "  curl 'http://localhost:8000/PreviewCard.png?title=Hello&description=World'"
echo ""
echo "View logs: docker-compose logs -f"
echo "Stop: docker-compose down"
