---
sidebar_position: 9
---

# Fix

This command applies automated code fixes to your Dart files using `dart fix`. It identifies and resolves common issues, such as unused imports, missing `const` modifiers, and outdated syntax.

```bash
morpheme fix
```

## Description

The `fix` command is a productivity tool that automatically corrects analysis issues flagged by the compiler. It supports scoping, allowing you to target the entire project or specific modules.

:::warning
This command modifies your source code. While `dart fix` is generally safe, it is highly recommended to commit your changes or run with `--dry-run` first.
:::

## Usage

### Fix Entire Project
Apply fixes to all apps, core packages, and features in the workspace.

```bash
morpheme fix
```

### Dry Run (Preview)
See what changes would be made without actually modifying any files.

```bash
morpheme fix --dry-run
```

### Fix Scoped Components

**Fix a specific app:**
```bash
morpheme fix -a driver
```

**Fix a specific feature:**
```bash
morpheme fix -f auth
```

**Fix a specific page:**
```bash
morpheme fix -f auth -p login
```

## Options

```bash
morpheme fix [options]
```

To see all available options and flags, run `morpheme fix --help`.

### Available Options

| Option | Abbr | Description |
|---|---|---|
| `--apps-name` | `-a` | Apply fixes to a specific app. |
| `--feature-name` | `-f` | Apply fixes to a specific feature. |
| `--page-name` | `-p` | Apply fixes to a specific page (requires `-f`). |
| `--dry-run` | | Show what fixes would be applied without making changes. |
