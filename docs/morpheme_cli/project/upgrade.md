---
sidebar_position: 9
---

# Upgrade

This command is used to upgrade the current package's dependencies to latest versions.

```bash
morpheme upgrade
```

## Options

```bash
morpheme upgrade [argument]
```

To see all available options and flags, run `morpheme upgrade --help`.

### Available Options

- Flag :

| Flag | Alternative    | Description                                                                  |
| -------- | -------------- | ---------------------------------------------------------------------------- |
| `-a`     | `--all`        | Upgrade all project package's dependencies to latest versions                |
| `-d`     | `--dependency` | Upgrade all dependency_manager package's dependencies to latest versions     |
| `-g`     | `--morpheme`   | Upgrade all morpheme_library package's dependencies to latest versions (Default) |

- Custom Morpheme Yaml :

| Custom Morpheme Yaml | Description |
|----------|-------------|
| `--morpheme-yaml [path_file]` | This command is used to select yaml config the application in a specific file, by default it will run the `morpheme.yaml` file. |
