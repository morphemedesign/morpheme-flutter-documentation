---
sidebar_position: 1
---

# APK

This command builds your Flutter application as an Android APK file for installation on devices or distribution outside of the Play Store.

```bash
morpheme build apk
```

## Description

The `apk` command compiles your Flutter app into an Android Package (APK) file. By default, it builds a **release** version with the **dev** flavor.

After building, the APK file will be located in:
- `build/app/outputs/apk/`
- `build/app/outputs/flutter-apk/`

## Usage

### Basic Build (Dev, Release)
```bash
morpheme build apk
```

### Build for Production
```bash
morpheme build apk --flavor prod --release
```

### Build with Obfuscation
Obfuscate code to protect against reverse engineering (recommended for production).

```bash
morpheme build apk --flavor prod --release --obfuscate
```

### Build with Custom Version
```bash
morpheme build apk --build-number 42 --build-name "1.2.0"
```

### Debug Build
```bash
morpheme build apk --flavor dev --debug
```

## Options

```bash
morpheme build apk [options]
```

To see all available options and flags, run `morpheme build apk --help`.

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

For production builds, always use `--flavor prod --release --obfuscate` to ensure optimal performance and security.

:::