echo "Checking NodeJS version..."
NODE_VERSION=$(node -v)
echo "Current version:" $NODE_VERSION

if [[ $NODE_VERSION == v14* ]] # Checking node version
then
    echo "Match"
else
    echo "Please use a NodeJS v14.x"
    exit(1)
fi