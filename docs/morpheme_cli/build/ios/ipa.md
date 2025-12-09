---
sidebar_position: 1
---

# IPA

This command builds your Flutter application as an iOS Application Archive (IPA) file for distribution through the App Store, TestFlight, or ad-hoc deployment.

```bash
morpheme build ipa
```

## Description

The `ipa` command compiles your Flutter app into an iOS IPA (`.ipa`) file. By default, it builds a **release** version with the **dev** flavor.

After building, the IPA file will be located in:
- `build/ios/ipa/`
- Archive: `build/ios/archive/`

:::info
**IPA vs iOS**: The `ipa` command creates a distributable archive, while `ios` creates an app bundle for development/testing.
:::

## Usage

### Basic Build (Dev, Release)
```bash
morpheme build ipa
```

### Build for App Store Submission
```bash
morpheme build ipa --flavor prod --release --export-method app-store
```

### Build for TestFlight
```bash
morpheme build ipa --flavor prod --export-method app-store
```

### Build for Ad-Hoc Distribution
For distributing to specific devices (up to 100 devices).

```bash
morpheme build ipa --flavor stag --export-method ad-hoc
```

### Build with Custom Export Options
```bash
morpheme build ipa --export-options-plist path/to/ExportOptions.plist
```

## Export Methods

| Method | Description | Use Case |
|---|---|---|
| `app-store` | App Store distribution | Submitting to App Store or TestFlight |
| `ad-hoc` | Limited device distribution | Testing on specific devices (max 100) |
| `development` | Development team distribution | Internal testing |
| `enterprise` | Enterprise in-house distribution | Corporate deployment |

## Options

```bash
morpheme build ipa [options]
```

To see all available options and flags, run `morpheme build ipa --help`.

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
| `--export-method [method]` | | Export method: `app-store`, `ad-hoc`, `development`, `enterprise`. |
| `--export-options-plist [path]` | | Path to custom ExportOptions.plist file. |
| `--[no-]obfuscate` | | Enable code obfuscation (requires `--split-debug-info`). Default: `true` in release. |
| `--split-debug-info [dir]` | | Store debug symbols separately. Default: `./.symbols/`. |
| `--[no-]l10n` | | Generate localization files before building. Default: `true`. |
| `--morpheme-yaml [path]` | | Path to a custom configuration file. |

:::warning Prerequisites
Building for iOS requires:
- macOS with Xcode installed
- Valid Apple Developer account
- Appropriate signing certificates and provisioning profiles
:::

:::tip
For App Store submissions, always use `--flavor prod --release --export-method app-store --obfuscate`.
:::
