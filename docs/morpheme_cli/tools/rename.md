---
sidebar_position: 4
---

# Rename

This command is used to rename files to snake_case with optional prefix and suffix. It supports glob patterns for batch renaming.

```bash
morpheme rename
```

## Options

```bash
morpheme rename [options]
```

To see all available options and flags, run `morpheme rename --help`.

### Available Options

| Option | Abbr | Description | Default |
|Params|---|---|---|
| `--prefix` | `-p` | Add prefix to filename (e.g., "test_" → "test_filename") | |
| `--suffix` | `-s` | Add suffix to filename (e.g., "_test" → "filename_test") | |
| `--glob-pattern` | `-g` | Glob pattern to match files (e.g., "*.dart", "test/**/*.dart") | `*` |
| `--dry-run` | `-n` | Show what would be renamed without actually renaming files | `false` |
| `--verbose` | `-v` | Show detailed information about the renaming process | `false` |

## Examples

**Rename all dart files in current directory:**

```bash
morpheme rename -g "*.dart"
```

**Add prefix to all files:**

```bash
morpheme rename -p "module"
```

**Preview changes (Dry Run):**

```bash
morpheme rename -g "*.dart" --dry-run
```
