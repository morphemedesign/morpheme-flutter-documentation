---
sidebar_position: 4
---

# Test

This command is used to run all unit tests in our project.

```bash
morpheme test
```

## Options

```bash
morpheme test [arguments]
```

To see all available options and flags, run `morpheme test --help`.

### Available Options

- Custom Morpheme Yaml :

| Custom Morpheme Yaml | Description |
|----------|-------------|
| `--morpheme-yaml [path_file]` | This command is used to select yaml config the application in a specific file, by default it will run the `morpheme.yaml` file. |

- Run Spesific Feature  :  
  
| Run Spesific Feature | Alternative | Description |
|----------|-------------|-------------|
| `-f [feature-name]` | `--feature [feature-name]` | Test with spesific feature |
