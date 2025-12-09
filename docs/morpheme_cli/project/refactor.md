---
sidebar_position: 10
---

# Refactor

This command systematically refactors your project by renaming file names, class names, variables, and package references. It's powerful for rebranding or changing the project name after creation.

```bash
morpheme refactor --old-name [old_name] --new-name [new_name]
```

## Description

The `refactor` command allows you to change the identity of your application. It traverses your codebase and safely replaces occurrences of the old name with the new name in:
1.  **File Names**: Renames files and directories (snake_case).
2.  **Class Names**: Renames classes (PascalCase).
3.  **Variables**: Renames variables (camelCase/snake_case).
4.  **Dependencies**: Updates `pubspec.yaml` and imports.
5.  **Configuration**: Updates `morpheme.yaml` and platform-specific configs.

## Usage

### Basic Renaming
Rename the project from `morpheme` (default) to `my_app`.

```bash
morpheme refactor --old-name morpheme --new-name my_app
```

### Renaming with Library Integration
If you want to also refactor the internal library components (cloning and renaming standard Morpheme libraries to be project-specific):

```bash
morpheme refactor --old-name morpheme --new-name my_app --include-library
```

### Excluding Specific Components
Prevent specific files or directories from being modified.

```bash
morpheme refactor --old-name morpheme --new-name my_app --exclude-directories "lib/generated,test/mocks"
```

## Options

```bash
morpheme refactor [options]
```

To see all available options and flags, run `morpheme refactor --help`.

### Available Options

| Option | Abbr | Description |
|---|---|---|
| `--old-name` | `-o` | Current project name to be replaced (default: `morpheme`). |
| `--new-name` | `-n` | New project name to enable. **(Mandatory)** |
| `--exclude-changes` | | Comma-separated list of code patterns to exclude from renaming. |
| `--exclude-files` | | Comma-separated list of specific file paths to exclude. |
| `--exclude-directories` | | Comma-separated list of directories to exclude entirely. |
| `--include-library` | | Include library component refactoring and dependency updates. |

:::warning Backup First
Refactoring involves large-scale changes file by file. It is highly recommended to commit your changes to git before running this command.
:::
