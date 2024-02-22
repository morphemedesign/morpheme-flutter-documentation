---
sidebar_position: 8
---

# Clean

This command is used to delete the l10n, build/ and .dart_tool/ in main, core & features directories.

```bash
morpheme clean
```

## Options

```bash
morpheme clean [arguments]
```

To see all available options and flags, run `morpheme clean --help`.

### Available Options

- Custom Morpheme Yaml :

| Custom Morpheme Yaml | Description |
|----------|-------------|
| `--morpheme-yaml [path_file]` | This command is used to select yaml config the application in a specific file, by default it will run the `morpheme.yaml` file. |

- Remove Lock :

| Remove Lock | Description |
|----------|-------------|
| `--remove-lock` | This flag is to remove .pubspec.lock. |
