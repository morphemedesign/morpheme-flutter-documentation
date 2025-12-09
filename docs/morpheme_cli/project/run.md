---
sidebar_position: 3
---

# Run

This command runs your Flutter application on a connected device or emulator. It automatically handles environment-specific configurations (flavors) defined in your `morpheme.yaml`, injecting them as `dart-define` variables.

```bash
morpheme run
```

## Description

The `run` command is a wrapper around `flutter run` that simplifies managing environments. Instead of manually passing long `--dart-define` arguments for API keys or base URLs, this command reads them from `morpheme.yaml` based on the selected flavor.

It also supports:
-   **Localization Generation**: Automatically generating l10n files before running.
-   **Firebase Setup**: Configuring environment-specific Firebase settings.
-   **Build Modes**: Easily switching between debug, profile, and release modes.

## Usage

### Basic Run
Runs the app with the default `dev` flavor in `debug` mode.

```bash
morpheme run
```

### Run with Specific Flavor
Runs the app using the `staging` environment configuration.

```bash
morpheme run --flavor stag
```

### Run in Release Mode
Runs the app in release mode (optimized performance).

```bash
morpheme run --release
```

### Run on Specific Device
Target a specific device ID (useful when multiple devices are connected).

```bash
morpheme run --device-id emulator-5554
```

### Run with Custom Target
Specify a different entry point (default is `lib/main.dart`).

```bash
morpheme run --target lib/main_dev.dart
```

### Dry Run
See the generated `flutter run` command without actually executing it.

```bash
morpheme run --command-only
```

## Options

```bash
morpheme run [options]
```

To see all available options and flags, run `morpheme run --help`.

### Available Options

| Option | Abbr | Description |
|---|---|---|
| `--flavor [env]` | `-f` | Environment flavor (dev, stag, prod). Default: `dev`. |
| `--target [path]` | `-t` | Main Dart entry file. Default: `lib/main.dart`. |
| `--debug` | | Run in debug mode (default). |
| `--profile` | | Run in profile mode. |
| `--release` | | Run in release mode. |
| `--device-id [id]` | `-d` | Target specific device identifier. |
| `--[no-]l10n` | | Generate localization files before running. Default: `true`. |
| `--command-only` | `-c` | Print the constructed command without running it. |
| `--morpheme-yaml [path]` | | Path to a custom configuration file. |
