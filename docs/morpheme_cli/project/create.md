---
sidebar_position: 1
---

# Create

This command creates a new Flutter application by scaffolding the **Morpheme Flutter Starter Kit**. It automates the process of cloning the repository, renaming the project (refactoring), and initializing the necessary configurations.

```bash
morpheme create [project_name]
```

## Description

The `create` command simplifies the setup of a new Morpheme-based project. It performs the following steps:
1.  **Clones** the `morpheme-flutter` repository (defaulting to the `master` branch or a specified tag).
2.  **Initializes** the project structure.
3.  **(Optional) Refactors** the codebase to rename "morpheme" references to your new project name.
4.  **Configures** the application ID (Bundle ID / Package Name).

## Usage

### Basic Creation
Create a new project named `my_app`.

```bash
morpheme create my_app
```

### Create with Custom settings
Create a project with a specific Application ID and a specific version of the starter kit.

```bash
morpheme create my_app --application-id com.company.myapp --tag v1.0.0
```

## Options

```bash
morpheme create [project_name] [options]
```

To see all available options and flags, run `morpheme create --help`.

### Available Options

| Option | Abbr | Description |
|---|---|---|
| `--tag [version]` | `-t` | Clone a specific tag version of the starter kit (default: `master`). |
| `--include-library` | | Include library dependencies when refactoring (use with `--refactor`). |
| `--application-id` | | Set a custom Application ID (Bundle ID) for the project (default: `design.morpheme`). |

:::tip

Use `--refactor` to ensure your new project doesn't retain the default "morpheme" names in its code, making it ready for development immediately.

:::
