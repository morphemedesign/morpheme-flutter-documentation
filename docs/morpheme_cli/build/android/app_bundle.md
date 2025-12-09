---
sidebar_position: 2
---

# App Bundle

This command builds your Flutter application as an Android App Bundle (AAB) file, which is the required format for publishing to the Google Play Store.

```bash
morpheme build appbundle
```

## Description

The `appbundle` command compiles your Flutter app into an Android App Bundle (`.aab`) file. By default, it builds a **release** version with the **dev** flavor.

After building, the AAB file will be located in:
- `build/app/outputs/bundle/`
- `build/app/outputs/flutter-appbundle/`

:::info
**AAB vs APK**: Android App Bundles are optimized for Play Store distribution. Google Play uses the AAB to generate and serve optimized APKs for each device configuration, reducing download sizes.
:::

## Usage

### Basic Build (Dev, Release)
```bash
morpheme build appbundle
```

### Build for Play Store (Production)
```bash
morpheme build appbundle --flavor prod --release --obfuscate
```

### Build with Custom Version
```bash
morpheme build appbundle --build-number 42 --build-name "1.2.0"
```

### Debug Build
```bash
morpheme build appbundle --flavor dev --debug
```

## Options

```bash
morpheme build appbundle [options]
```

To see all available options and flags, run `morpheme build appbundle --help`.

### Available Options

| Option | Abbr | Description |
|---|---|---|
| `--flavor [env]` | `-f` | Build flavor (dev, stag, prod). Default: `dev`. |
| `--debug` | | Build in debug mode. |
| `--profile` | | Build in profile mode. |
| `--release` | | Build in release mode (default). |
| `--target [path]` | `-t` | Main Dart entry file. Default: `lib/main.dart`. |
| `--build-number [number]` | | Override the build number (e.g., `42`). |
| `--build-name [version]` | | Override the build name/version (e.g., `1.2.0`). |
| `--[no-]obfuscate` | | Enable code obfuscation (requires `--split-debug-info`). Default: `true` in release. |
| `--split-debug-info [dir]` | | Store debug symbols separately. Default: `./.symbols/`. |
| `--[no-]l10n` | | Generate localization files before building. Default: `true`. |
| `--morpheme-yaml [path]` | | Path to a custom configuration file. |

:::tip
For Play Store submissions, always use `--flavor prod --release --obfuscate` to ensure optimal performance and security.
:::