echo "Checking NodeJS version..."
NODE_VERSION=$(node -v)
echo "Current version:" $NODE_VERSION

if [[ $NODE_VERSION == v14* ]] # Checking node version
then
    echo "You are using NodeJS: " $NODE_VERSION
else
    echo "Please use a NodeJS v14.x"
    exit 1
fi

echo "Installing Ghost v3.41.2"
cd ghost
ghost install --force 3.41.1 --local

echo "Installing SqLite"
npm install sqlite3 --save
