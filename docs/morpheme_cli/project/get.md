---
sidebar_position: 2
---

# Get

This command retrieves all dependencies for your project by running `flutter pub get` recursively across all packages (main, core, and features). It ensures that all modules have their dependencies resolved and are in sync.

```bash
morpheme get
```

## Description

The `get` command simplifies dependency management in modular projects. Instead of running `flutter pub get` in every directory manually, this command:
1.  **Iterates** through all packages (apps, core, features).
2.  **Runs** `flutter pub get` in parallel (optimized by the `concurrent` setting in `morpheme.yaml`).
3.  **(Optional) Auto-generates L10n**: Automatically runs the l10n generator to ensure localization files are available immediately after fetching dependencies.

## Usage

### Basic Retrieval

```bash
morpheme get
```

### Retrieval without L10n Generation

If you want to skip the automatic l10n generation step:

```bash
morpheme get --no-generate-l10n
```

## Options

```bash
morpheme get [options]
```

To see all available options and flags, run `morpheme get --help`.

### Available Options

| Option | Description |
|---|---|
| `--[no-]generate-l10n` | Generate l10n files before getting dependencies (default: `true`). |
| `--morpheme-yaml [path]` | Path to a custom configuration file. |
