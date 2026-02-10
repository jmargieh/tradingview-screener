#!/bin/bash

# Release script - Creates a new release by tagging and pushing
# Usage: ./scripts/release.sh [patch|minor|major|<version>]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get current version from package.json
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo -e "${GREEN}Current version: ${CURRENT_VERSION}${NC}"

# Function to increment version
increment_version() {
  local version=$1
  local type=$2

  IFS='.' read -r -a parts <<< "$version"
  major=${parts[0]}
  minor=${parts[1]}
  patch=${parts[2]}

  case $type in
    major)
      major=$((major + 1))
      minor=0
      patch=0
      ;;
    minor)
      minor=$((minor + 1))
      patch=0
      ;;
    patch)
      patch=$((patch + 1))
      ;;
    *)
      echo "Invalid version type: $type"
      exit 1
      ;;
  esac

  echo "$major.$minor.$patch"
}

# Determine new version
if [ -z "$1" ]; then
  echo -e "${RED}Error: Version type required${NC}"
  echo "Usage: $0 [patch|minor|major|<version>]"
  echo ""
  echo "Examples:"
  echo "  $0 patch     # 1.1.0 -> 1.1.1"
  echo "  $0 minor     # 1.1.0 -> 1.2.0"
  echo "  $0 major     # 1.1.0 -> 2.0.0"
  echo "  $0 1.2.3     # Set specific version"
  exit 1
fi

if [[ "$1" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  # Specific version provided
  NEW_VERSION=$1
elif [[ "$1" =~ ^(major|minor|patch)$ ]]; then
  # Increment type provided
  NEW_VERSION=$(increment_version "$CURRENT_VERSION" "$1")
else
  echo -e "${RED}Error: Invalid version format${NC}"
  echo "Version must be 'major', 'minor', 'patch', or a semantic version (e.g., 1.2.3)"
  exit 1
fi

echo -e "${YELLOW}New version will be: ${NEW_VERSION}${NC}"

# Confirm
read -p "Create release v${NEW_VERSION}? (y/N) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "Release cancelled"
  exit 0
fi

# Check if working directory is clean
if [[ -n $(git status -s) ]]; then
  echo -e "${RED}Error: Working directory is not clean${NC}"
  echo "Please commit or stash your changes first"
  exit 1
fi

# Check if on main branch
CURRENT_BRANCH=$(git branch --show-current)
if [[ "$CURRENT_BRANCH" != "main" ]]; then
  echo -e "${YELLOW}Warning: Not on main branch (currently on: $CURRENT_BRANCH)${NC}"
  read -p "Continue anyway? (y/N) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Release cancelled"
    exit 0
  fi
fi

# Update package.json version
echo -e "${GREEN}Updating package.json version...${NC}"
npm version "$NEW_VERSION" --no-git-tag-version

# Update CHANGELOG.md
echo -e "${GREEN}Checking CHANGELOG.md...${NC}"
if grep -q "\[${NEW_VERSION}\]" CHANGELOG.md; then
  echo -e "${GREEN}✓ CHANGELOG.md already contains version ${NEW_VERSION}${NC}"
else
  echo -e "${YELLOW}Warning: CHANGELOG.md does not contain version ${NEW_VERSION}${NC}"
  echo "Please update CHANGELOG.md before continuing"

  # Revert package.json changes
  git checkout -- package.json
  exit 1
fi

# Commit version bump
echo -e "${GREEN}Committing version bump...${NC}"
git add package.json
git commit -m "chore: bump version to ${NEW_VERSION}"

# Create and push tag
echo -e "${GREEN}Creating tag v${NEW_VERSION}...${NC}"
git tag -a "v${NEW_VERSION}" -m "Release version ${NEW_VERSION}"

echo -e "${GREEN}Pushing changes and tag...${NC}"
git push origin "$CURRENT_BRANCH"
git push origin "v${NEW_VERSION}"

echo ""
echo -e "${GREEN}✓ Release v${NEW_VERSION} created successfully!${NC}"
echo ""
echo "GitHub Actions will now:"
echo "  1. Run tests and validation"
echo "  2. Build the package"
echo "  3. Create a GitHub release with changelog notes"
echo "  4. Publish to npm (if configured)"
echo ""
echo "Check the release at:"
echo "  https://github.com/jmargieh/tradingview-screener/releases/tag/v${NEW_VERSION}"
echo ""
echo "Monitor the workflow at:"
echo "  https://github.com/jmargieh/tradingview-screener/actions"
