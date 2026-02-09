# Documentation Setup Instructions

This project uses [VitePress](https://vitepress.dev/) for documentation.

## Local Development

Start the development server:

```bash
npm run docs:dev
```

Visit http://localhost:5173/tradingview-screener-api/

## Building

Build the documentation site:

```bash
npm run docs:build
```

Preview the built site:

```bash
npm run docs:preview
```

## Deployment

The documentation is automatically deployed to GitHub Pages when you push to the `main` branch.

### Setup GitHub Pages (One-time)

1. Go to your repository settings
2. Navigate to **Settings > Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to main branch to trigger deployment

Your docs will be available at:
`https://jmargieh.github.io/tradingview-screener-api/`

## Structure

```
docs/
├── .vitepress/
│   ├── config.ts          # VitePress configuration
│   ├── cache/             # Build cache (ignored)
│   └── dist/              # Build output (ignored)
├── index.md               # Homepage
├── quickstart.md          # Quick start guide
├── installation.md        # Installation guide
├── screeners/             # Screener documentation
├── fields/                # Field documentation
├── filtering/             # Filtering documentation
├── examples/              # Example guides
├── advanced/              # Advanced topics
├── integration/           # Integration guides
├── utilities/             # Utility documentation
├── api/                   # API reference
└── ...
```

## Customization

Edit `docs/.vitepress/config.ts` to:
- Update navigation
- Modify sidebar
- Change theme colors
- Add custom features

## Adding New Pages

1. Create a new `.md` file in the appropriate folder
2. Add it to the sidebar in `docs/.vitepress/config.ts`
3. VitePress will automatically generate the route

## Markdown Features

VitePress supports enhanced markdown:

- Custom containers (tip, warning, danger)
- Code groups and syntax highlighting
- Custom components
- Math equations
- Emoji support

See: https://vitepress.dev/guide/markdown

## Troubleshooting

**Port already in use:**
```bash
pkill -f vitepress
npm run docs:dev
```

**Cache issues:**
```bash
rm -rf docs/.vitepress/cache
npm run docs:dev
```

**Build fails:**
- Check that all internal links are valid
- Ensure markdown files don't have syntax errors
- Verify images exist if referenced
