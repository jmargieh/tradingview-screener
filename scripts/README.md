# Scripts

Utility scripts for development and release management.

## Release Script

### Usage

```bash
./scripts/release.sh [patch|minor|major|<version>]
```

### Examples

```bash
# Patch release (1.1.0 -> 1.1.1)
./scripts/release.sh patch

# Minor release (1.1.0 -> 1.2.0)
./scripts/release.sh minor

# Major release (1.1.0 -> 2.0.0)
./scripts/release.sh major

# Specific version
./scripts/release.sh 2.0.0
```

### What it does

1. **Validates** - Checks working directory is clean and you're on main branch
2. **Updates** - Bumps version in `package.json`
3. **Verifies** - Ensures `CHANGELOG.md` has an entry for the new version
4. **Commits** - Creates a version bump commit
5. **Tags** - Creates a git tag (e.g., `v1.1.0`)
6. **Pushes** - Pushes commit and tag to remote

### Prerequisites

Before running the release script:

1. **Update CHANGELOG.md** with the new version and changes
2. **Commit all changes** - Working directory must be clean
3. **Be on main branch** (or confirm you want to release from another branch)

### After Release

The GitHub Actions workflow will automatically:

1. Run tests and type checking
2. Build the package
3. Extract changelog notes for the version
4. Create a GitHub release with the changelog
5. Publish to npm (if `NPM_TOKEN` secret is configured)

## Setting up npm Publishing

To enable automatic npm publishing, add your npm token to GitHub secrets:

1. Generate an npm token at https://www.npmjs.com/settings/tokens
2. Go to your repository Settings → Secrets → Actions
3. Add a new secret named `NPM_TOKEN` with your token value

The workflow will then automatically publish to npm when you push a version tag.
