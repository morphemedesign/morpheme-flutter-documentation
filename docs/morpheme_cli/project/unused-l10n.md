---
sidebar_position: 12
---

This command analyzes your codebase to identify localization (l10n) keys defined in your ARB files that are not actually used in your Dart code. It helps keep your localization files clean and lightweight.

```bash
morpheme unused-l10n
```

## Description

The `unused-l10n` command scans your project to:
1.  **Collect Keys**: Extracts all keys from your `.arb` files.
2.  **Scan Usage**: Searches through your Dart files for usages of these keys (e.g., `S.of(context).keyName`).
3.  **Report**: Lists any keys that were not found in the code.
4.  **Clean Up**: (Optional) Automatically removes these unused keys from the ARB files.

## Performance Optimization
To handle large projects efficiently, the command by default **only scans specific folders** (like `lib/presentation`, `lib/data`, `lib/domain`) where localizations are typically used. You can disable this optimization to scan every single Dart file if needed.

## Usage

### Check for Unused Keys
Analyze the project and list unused keys without making changes.

```bash
morpheme unused-l10n
```

### Check All Files (Deep Scan)
Disable the folder filter to scan every Dart file in the project.

```bash
morpheme unused-l10n --no-filter-presentation
```

### Auto-Remove Unused Keys
Automatically delete the identified unused keys from your `.arb` files.

```bash
morpheme unused-l10n --auto-remove
```

### Auto-Remove with Backup
Create a backup of your ARB files (e.g., `intl_en.arb.backup`) before modifying them.

```bash
morpheme unused-l10n --auto-remove --backup
```

## Options

```bash
morpheme unused-l10n [options]
```

To see all available options and flags, run `morpheme unused-l10n --help`.

### Available Options

| Option | Abbr | Description |
|---|---|---|
| `--[no-]filter-presentation` | | Filter `.dart` files to scan only presentation/data/domain folders (default: `true`). |
| `--auto-remove` | | Automatically remove unused keys from ARB files. |
| `--backup` | `-b` | Create backup files (`.arb.backup`) before removing keys (requires `--auto-remove`). |
| `--confirm` | | Skip the confirmation prompt when using `--auto-remove`. |
| `--morpheme-yaml [path]` | | Path to a custom configuration file. |
