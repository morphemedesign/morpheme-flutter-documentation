---
sidebar_position: 7
---

# Format

This command formats your Dart code using `dart format` to ensure consistent code style across your project. It can be applied globally or targeted to specific modules (apps, features, or pages).

```bash
morpheme format
```

## Description

The `format` command automatically fixes style issues in your code, such as indentation, spacing, and line breaks. It helps maintain a clean and readable codebase. You can run it on:
-   **Entire Project**: Formats everything.
-   **Specific App**: Formats a specific app module.
-   **Specific Feature**: Formats a feature (standalone or within an app).
-   **Specific Page**: Formats just a single page within a feature.

## Usage

### Format Entire Project

```bash
morpheme format
```

### Format Scoped Components

**Format a specific app:**
```bash
morpheme format -a driver
```

**Format a specific feature:**
```bash
morpheme format -f auth
```

**Format a specific page:**
```bash
# In a standalone feature
morpheme format -f auth -p login

# In an app-specific feature
morpheme format -a driver -f home -p dashboard
```

## Options

```bash
morpheme format [options]
```

To see all available options and flags, run `morpheme format --help`.

### Available Options

| Option | Abbr | Description |
|---|---|---|
| `--apps-name` | `-a` | Format specific app. |
| `--feature-name` | `-f` | Format specific feature. |
| `--page-name` | `-p` | Format specific page (requires `-f`). |
