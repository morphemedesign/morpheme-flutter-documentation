---
sidebar_position: 1
---

# Web

This command builds your Flutter application for web deployment, creating optimized static files that can be hosted on any web server or CDN.

```bash
morpheme build web
```

## Description

The `web` command compiles your Flutter app into a web application bundle. By default, it builds a **release** version with the **dev** flavor using the **auto** web renderer.

After building, the web files will be located in:
- `build/web/`

These files can be deployed to any static hosting service (Firebase Hosting, Netlify, Vercel, GitHub Pages, etc.).

## Usage

### Basic Build (Dev, Release)
```bash
morpheme build web
```

### Build for Production
```bash
morpheme build web --flavor prod --release
```

### Build with CanvasKit Renderer
For better graphics performance (larger bundle size).

```bash
morpheme build web --flavor prod --web-renderer canvaskit
```

### Build with HTML Renderer
For better compatibility and smaller bundle size.

```bash
morpheme build web --flavor prod --web-renderer html
```

### Build PWA with Offline Support
```bash
morpheme build web --flavor prod --pwa-strategy offline-first
```

### Build for Subdirectory Deployment
If deploying to a subdirectory (e.g., `https://example.com/myapp/`).

```bash
morpheme build web --base-href /myapp/
```

### Build with CSP Compliance
For strict Content Security Policy environments.

```bash
morpheme build web --csp --no-source-maps
```

## Web Renderers

| Renderer | Description | Best For |
|---|---|---|
| `auto` | HTML on mobile, CanvasKit on desktop (default) | Balanced performance |
| `canvaskit` | WebGL/WebAssembly renderer | Graphics-heavy apps, desktop |
| `html` | DOM-based renderer | Compatibility, smaller bundles |
| `skwasm` | Experimental WebAssembly renderer | Experimental features |

## PWA Strategies

| Strategy | Description |
|---|---|
| `offline-first` | Cache resources for offline use |
| `none` | No PWA features (default) |

## Options

```bash
morpheme build web [options]
```

To see all available options and flags, run `morpheme build web --help`.

### Available Options

| Option | Abbr | Description |
|---|---|---|
| `--flavor [env]` | `-f` | Build flavor (dev, stag, prod). Default: `dev`. |
| `--debug` | | Build in debug mode. |
| `--profile` | | Build in profile mode. |
| `--release` | | Build in release mode (default). |
| `--target [path]` | `-t` | Main Dart entry file. Default: `lib/main.dart`. |
| `--base-href [path]` | | Base href for the app. Default: `/`. |
| `--web-renderer [type]` | | Web renderer: `auto`, `canvaskit`, `html`, `skwasm`. Default: `auto`. |
| `--pwa-strategy [strategy]` | | PWA strategy: `offline-first`, `none`. |
| `--[no-]web-resources-cdn` | | Load resources from CDN. |
| `--[no-]csp` | | Enable Content Security Policy compliance. |
| `--[no-]source-maps` | | Generate source maps for debugging. Default: `true`. |
| `--dart2js-optimization [level]` | | Dart2JS optimization level: `O0`, `O1`, `O2`, `O3`, `O4`. |
| `--[no-]dump-info` | | Generate compilation info for analysis. |
| `--[no-]frequency-based-minification` | | Use frequency-based minification. |
| `--build-number [number]` | | Override the build number. |
| `--build-name [version]` | | Override the build name/version. |
| `--[no-]l10n` | | Generate localization files before building. Default: `true`. |
| `--morpheme-yaml [path]` | | Path to a custom configuration file. |

## Deployment

After building, deploy the `build/web/` directory to your hosting service:

### Firebase Hosting
```bash
firebase deploy --only hosting
```

### Netlify
```bash
netlify deploy --prod --dir=build/web
```

### GitHub Pages
```bash
# Commit build/web to gh-pages branch
git subtree push --prefix build/web origin gh-pages
```

:::tip
For production builds, use `--flavor prod --release --web-renderer canvaskit` for optimal performance, or `--web-renderer html` for better compatibility and smaller bundle size.
:::

:::info
The web build includes a service worker for PWA support when using `--pwa-strategy offline-first`.
:::
