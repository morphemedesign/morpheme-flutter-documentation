---
sidebar_position: 6
---

# Analyze

This command runs static code analysis (linting) across your entire project, including the main app, core packages, and all feature modules. It helps ensure code quality and adherence to strict typing and style rules defined in your project.

```bash
morpheme analyze
```

## Description

The `analyze` command iterates through all packages in your workspace and executes `flutter analyze` on them. It is optimized for performance, running analysis processes in parallel based on the `concurrent` setting in your `morpheme.yaml`.

This is essential for catching:
-   Syntax errors
-   Type safety issues
-   Unused variables/imports
-   Linter rule violations

## Configuration

You can control the concurrency level in your `morpheme.yaml` file:

```yaml
concurrent: 4 # limit to 4 parallel processes
```

## Options

```bash
morpheme analyze [options]
```

To see all available options and flags, run `morpheme analyze --help`.

### Available Options

| Option | Description |
|---|---|
| `--morpheme-yaml [path]` | Path to a custom configuration file (default: `morpheme.yaml`). |
