# Deployment Guide

## SSR Deployment with Automated Semantic Versioning

This project uses **semantic-release** for automated version management and deployment with versioned CDN assets.

## How it Works

### Architecture
- **K3s Server**: Runs Next.js SSR application
- **CloudFront CDN**: Serves static assets (`_next/`, `public/`) with versioning
- **S3**: Stores versioned builds
- **Semantic Release**: Analyzes commits and automatically creates versions

### Automated Workflow
1. **Push to main**: Commits are pushed to the main branch
2. **Semantic Release**: Analyzes commit messages using conventional commits
3. **Version Bump**: Automatically increments version based on commit types
4. **Create Release**: Creates git tag, updates CHANGELOG.md, creates GitHub release
5. **Deploy to S3**: Uploads versioned assets to CDN

### Commit Message Format

This project uses **Conventional Commits** for automated versioning:

```bash
# Patch release (0.1.0 → 0.1.1) - Bug fixes
fix: correct image loading issue
fix(auth): resolve login timeout

# Minor release (0.1.0 → 0.2.0) - New features
feat: add dark mode toggle
feat(blog): implement search functionality

# Major release (0.1.0 → 1.0.0) - Breaking changes
feat!: redesign API endpoints
feat(api)!: change response format

BREAKING CHANGE: API endpoints now return data in new format

# No release - Other changes
chore: update dependencies
docs: improve README
style: format code
refactor: simplify image loader
test: add unit tests
ci: update workflow
```

## Creating a New Release

### Automatic Release (Recommended)

1. **Make changes and commit with conventional commit messages**:
   ```bash
   git add .
   git commit -m "feat: add user profile page"
   ```

2. **Push to main branch**:
   ```bash
   git push origin main
   ```

3. **Automatic process happens**:
   - Semantic-release analyzes your commits
   - Determines version bump (patch/minor/major)
   - Updates `package.json` version
   - Generates `CHANGELOG.md`
   - Creates git tag (e.g., `v0.2.0`)
   - Creates GitHub release
   - Triggers deployment to S3
   - Uploads to `s3://devshram.com/devshram/v0.2.0/`
   - Assets available at `https://assets.devshram.com/devshram/v0.2.0/`

### Manual Deployment

For manual deployments without creating a release:

1. Go to **GitHub Actions** → **Release and Deploy**
2. Click **Run workflow**
3. Deploys current `package.json` version

## Commit Message Guidelines

### Feature Development
```bash
feat: add new carousel component
feat(ui): implement responsive navigation
feat(api): add user authentication endpoint
```

### Bug Fixes
```bash
fix: resolve mobile menu not closing
fix(images): correct CDN path loading
fix(forms): handle validation errors
```

### Breaking Changes
```bash
feat!: redesign component API

BREAKING CHANGE: Button component now uses 'variant' prop instead of 'type'
```

### Other Changes (No Release)
```bash
chore: update dependencies
docs: add deployment guide
style: format with prettier
refactor: extract reusable hooks
test: add integration tests
ci: configure semantic-release
```

## Using Commit Helper Tools

### Interactive Commit (Recommended)

Instead of `git commit`, use the interactive commit helper:

```bash
# Stage your changes
git add .

# Use the commit helper tool
npm run commit
```

This will prompt you with:
1. **Type of change**: Select from feat, fix, docs, etc.
2. **Scope** (optional): What part of the app (e.g., auth, ui, api)
3. **Short description**: Brief summary of the change
4. **Long description** (optional): Detailed explanation
5. **Breaking changes** (optional): If this breaks existing functionality

Example session:
```
? Select the type of change: feat
? What is the scope of this change: ui
? Write a short description: add dark mode toggle
? Provide a longer description: (press enter to skip)
? Are there any breaking changes? No
? Does this affect any open issues? No
```

Result: Creates commit `feat(ui): add dark mode toggle`

### Manual Commits

You can still use regular `git commit` commands. Your commits will be validated automatically:

```bash
git commit -m "feat: add user profile page"
# ✅ Passes validation

git commit -m "added new feature"
# ❌ Fails validation - must follow conventional format
```

### Commit Validation

All commits are automatically validated using commitlint:
- ✅ Valid: `feat: add feature`, `fix(auth): resolve login bug`
- ❌ Invalid: `Added feature`, `fixed bug`, `WIP`

If a commit fails validation, you'll see an error and the commit will be rejected.

## K3s Deployment Workflow

1. **Checkout the version tag in your K3s cluster**:
   ```bash
   git fetch --tags
   git checkout v0.1.1
   ```

2. **Build and deploy**:
   - The app reads version from `package.json`
   - Automatically loads assets from `https://assets.devshram.com/devshram/v0.1.1/`

3. **Rollback if needed**:
   ```bash
   git checkout v0.1.0
   # Redeploy - will load assets from v0.1.0
   ```

## File Structure on S3

```
s3://devshram.com/
└── devshram/
    ├── v0.1.0/
    │   ├── _next/
    │   │   ├── static/
    │   │   └── ...
    │   └── public/
    │       └── avinash.png
    ├── v0.1.1/
    │   ├── _next/
    │   └── public/
    └── v0.1.2/
        ├── _next/
        └── public/
```

## Benefits

✅ **No cache invalidation needed** - Each version has unique URLs
✅ **Easy rollbacks** - Just redeploy older git tag
✅ **No version conflicts** - Multiple versions can coexist
✅ **Long-term caching** - Assets cached with `max-age=31536000`
✅ **Fast deployments** - Only uploads new version files

## Troubleshooting

### Images loading from server instead of CDN
- Make sure you've restarted the dev server after config changes
- Check that `NODE_ENV=production` in production
- Verify version in URL matches git tag

### Wrong version being deployed
- Check `package.json` version matches git tag
- Verify GitHub Actions is using correct version in logs

### Assets not found (404)
- Ensure deployment completed successfully
- Check S3 path matches expected version
- Verify CloudFront distribution is configured correctly
