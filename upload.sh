yarn build

function upload() {
  aws s3 sync ./build s3://major-temp-service --acl public-read
}

upload

GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo -e "${GREEN}done${NC}"
