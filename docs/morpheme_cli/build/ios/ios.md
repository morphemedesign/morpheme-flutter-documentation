---
sidebar_position: 2
---

# iOS

This command builds your Flutter application as an iOS app bundle for development, testing, and deployment to devices or simulators.

```bash
morpheme build ios
```

## Description

The `ios` command compiles your Flutter app into an iOS application bundle (`.app`). By default, it builds a **release** version with the **dev** flavor.

This command is primarily used for:
- Testing on physical devices
- Running on iOS simulators
- Development and debugging

:::caution macOS Required
This command only works on macOS with Xcode installed.
:::

## Usage

### Basic Build (Dev, Release)
```bash
morpheme build ios
```

### Build for Simulator (No Code Signing)
```bash
morpheme build ios --flavor dev --debug --no-codesign
```

### Build for Device (With Code Signing)
```bash
morpheme build ios --flavor prod --release --codesign
```

### Build with Custom Version
```bash
morpheme build ios --build-number 42 --build-name "1.2.0"
```

## Code Signing

For deploying to physical devices, proper code signing is required:

| Build Type | Certificate | Provisioning Profile |
|---|---|---|
| Development | Development Certificate | Development Profile |
| Distribution | Distribution Certificate | Distribution Profile |
| Ad-hoc | Distribution Certificate | Ad-hoc Profile |

:::info
Simulator builds do not require code signing. Use `--no-codesign` for simulator-only builds.
:::

## Options

```bash
morpheme build ios [options]
```

To see all available options and flags, run `morpheme build ios --help`.

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
| `--[no-]codesign` | | Enable/disable code signing. Default: `true`. |
| `--[no-]obfuscate` | | Enable code obfuscation (requires `--split-debug-info`). Default: `true` in release. |
| `--split-debug-info [dir]` | | Store debug symbols separately. Default: `./.symbols/`. |
| `--[no-]l10n` | | Generate localization files before building. Default: `true`. |
| `--morpheme-yaml [path]` | | Path to a custom configuration file. |

:::tip
For App Store distribution, use `morpheme build ipa` instead. The `ios` command is best for development and testing.
:::