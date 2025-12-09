---
sidebar_position: 8
---

# Clean

This command performs a deep clean of your project to remove generated artifacts, build caches, and temporary files. It ensures a fresh state for your next build by targeting the main project, core packages, and all feature modules recursively.

```bash
morpheme clean
```

## Description

The `clean` command removes the following directories and files across your entire workspace:
1.  **Build Artifacts**: Deletes `build/` directories in all packages.
2.  **Dart Tool Cache**: Deletes `.dart_tool/` directories in all packages.
3.  **Localization**: Deletes the generated `l10n/` directory (configured in `morpheme.yaml`) to force regeneration of translation files.

This is useful when you encounter strange build errors, caching issues, or want to free up disk space.

## Extended Cleanup

You can perform an even deeper clean by removing dependency lock files.

### Remove iOS Lock File
To force a fresh resolution of iOS dependencies (CocoaPods), use the `--remove-lock` flag. This deletes `ios/Podfile.lock`.

```bash
morpheme clean --remove-lock
```

## Options

```bash
morpheme clean [options]
```

To see all available options and flags, run `morpheme clean --help`.

### Available Options

| Option | Abbr | Description |
|---|---|---|
| `--morpheme-yaml [path]` | | Path to a custom configuration file (default: `morpheme.yaml`). |
| `--remove-lock` | `-l` | Deletes `ios/Podfile.lock` to force fresh CocoaPods dependency resolution. |
