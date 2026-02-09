# Publishing to NPM Guide

## Prerequisites Checklist

Before publishing, ensure:

- [x] Package name is available: `tradingview-screener` ✓
- [x] LICENSE file exists ✓
- [x] README.md exists with good documentation ✓
- [x] package.json properly configured ✓
- [x] Code builds successfully
- [x] Tests pass
- [ ] You have an npm account
- [ ] You're logged in to npm

## Step-by-Step Publishing Guide

### Step 1: Create NPM Account (if you don't have one)

1. Go to https://www.npmjs.com/signup
2. Create an account with:
   - Username
   - Email address
   - Password
3. Verify your email address

### Step 2: Login to NPM

In your terminal, run:

```bash
npm login
```

You'll be prompted for:
- Username
- Password
- Email (this will be public)
- One-time password (if you have 2FA enabled)

To verify you're logged in:

```bash
npm whoami
```

### Step 3: Pre-publish Checks

Run these commands to ensure everything is ready:

```bash
# 1. Clean install dependencies
npm ci

# 2. Build the project
npm run build

# 3. Run tests
npm test

# 4. Check what files will be published
npm pack --dry-run
```

The last command shows exactly what will be included in your package.

### Step 4: Review Package Contents

The `files` field in package.json specifies what gets published:
```json
"files": [
  "dist",
  "README.md",
  "LICENSE"
]
```

This means only `dist/`, `README.md`, and `LICENSE` will be published (package.json is always included).

### Step 5: Test Installation Locally (Optional but Recommended)

Before publishing, test the package locally:

```bash
# Pack the package
npm pack

# This creates a .tgz file like: tradingview-screener-1.0.0.tgz
# Install it in a test project:
cd /tmp
mkdir test-package
cd test-package
npm init -y
npm install /path/to/tradingview-screener-1.0.0.tgz

# Test it works
node -e "const pkg = require('tradingview-screener'); console.log('✓ Package works!')"
```

### Step 6: Publish to NPM

**For first-time publish (public package):**

```bash
npm publish --access public
```

**Note:** The `--access public` flag is required for scoped packages or first-time publish.

### Step 7: Verify Publication

After publishing, verify it's available:

```bash
# Check on npm registry
npm view tradingview-screener

# Visit the npm page
open https://www.npmjs.com/package/tradingview-screener
```

### Step 8: Test Installation from NPM

```bash
# In a new directory
cd /tmp
mkdir test-npm-install
cd test-npm-install
npm init -y
npm install tradingview-screener

# Test it
node -e "const { StockScreener } = require('tradingview-screener'); console.log('✓ Installed from npm!')"
```

## Post-Publication Tasks

### 1. Add NPM Badge to README

Add this to your README.md:

```markdown
[![npm version](https://badge.fury.io/js/tradingview-screener.svg)](https://www.npmjs.com/package/tradingview-screener)
[![npm downloads](https://img.shields.io/npm/dm/tradingview-screener.svg)](https://www.npmjs.com/package/tradingview-screener)
```

### 2. Update Documentation

- Update docs with installation instructions: `npm install tradingview-screener`
- Add link to npm package in documentation

### 3. Create GitHub Release

Tag the release:

```bash
git tag v1.0.0
git push origin v1.0.0
```

Create a release on GitHub:
- Go to https://github.com/jmargieh/tradingview-screener/releases
- Click "Create a new release"
- Select the v1.0.0 tag
- Write release notes
- Publish release

## Future Updates

When you make changes and want to publish an update:

### 1. Update Version

Use semantic versioning (semver):

```bash
# Patch release (1.0.0 -> 1.0.1) - bug fixes
npm version patch

# Minor release (1.0.0 -> 1.1.0) - new features, backward compatible
npm version minor

# Major release (1.0.0 -> 2.0.0) - breaking changes
npm version major
```

This will:
- Update package.json version
- Create a git commit
- Create a git tag

### 2. Publish Update

```bash
git push && git push --tags
npm publish
```

## Common Issues & Solutions

### Issue: "You must be logged in to publish packages"
**Solution:** Run `npm login` and authenticate

### Issue: "Package name already exists"
**Solution:** The name is taken. Choose a different name or use a scoped package like `@yourusername/tradingview-screener`

### Issue: "402 Payment Required"
**Solution:** You're trying to publish a private package without a paid npm account. Use `npm publish --access public`

### Issue: "npm ERR! 403 Forbidden"
**Solution:** You don't have permission. Either:
- You're not logged in (run `npm login`)
- The package name is already taken
- You're not a collaborator on the package

### Issue: Tests fail during prepublishOnly
**Solution:** Fix the failing tests or temporarily comment out the test script in prepublishOnly (not recommended)

## Automatic Publishing with GitHub Actions (Optional)

You can automate publishing with a GitHub Action. Create `.github/workflows/publish.yml`:

```yaml
name: Publish to NPM

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build
      - run: npm test
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

To use this:
1. Create an npm access token: https://www.npmjs.com/settings/~/tokens
2. Add it to GitHub secrets: Settings > Secrets > Actions > New repository secret
3. Name it `NPM_TOKEN`

## Quick Command Reference

```bash
# Login
npm login

# Check login
npm whoami

# Dry run (see what will be published)
npm pack --dry-run

# Publish
npm publish --access public

# Update version
npm version patch|minor|major

# View package info
npm view tradingview-screener

# Unpublish (within 72 hours, use with caution!)
npm unpublish tradingview-screener@1.0.0
```

## Best Practices

1. **Always test before publishing** - Use `npm pack` and test locally
2. **Follow semantic versioning** - Use proper version numbers
3. **Write good release notes** - Document changes in CHANGELOG.md
4. **Test installation** - Verify package works after publishing
5. **Keep dependencies updated** - Regularly update and test dependencies
6. **Use .npmignore or files field** - Control what gets published
7. **Enable 2FA** - Secure your npm account with two-factor authentication

---

**Ready to publish?** Follow the steps above and you'll have your package on npm in minutes! 🚀
