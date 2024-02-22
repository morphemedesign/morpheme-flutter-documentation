---
sidebar_position: 3
---

# Run

This command has a function to run our project. With this command we can adjust which project environment and which application version we want to run according to the project configuration in the `morpheme.yaml` file.

## Default Command

```bash
morpheme run
```

By default this command will run the project on **the dev environment release version**.

## Options

```bash
morpheme run [arguments]
```

To see all available options and flags, run `morpheme run --help`.

### Available Options

- Generate l10n :  
  
| Generate l10n | Description |
|----------|-------------|-------------|
| `--[no]l10n` | Generate l10n first before running other command. (defaults to on) |

- Flavor/Environment :  
  
| Flavor/Environment | Alternative | Description |
|----------|-------------|-------------|
| `-f dev` | `--flavor dev` | Run project on dev environment (Default) |
| `-f stag` | `--flavor stag` | Run project on staging environment|
| `-f prod` | `--flavor prod` | Run project on production environment |

- App Version :
  
| App Version | Description |
|----------|-------------|
| `--debug` |Run project on debug mode (Default) |
| `--profile` | Run project on profile mode|
| `--release` | Run project on release mode (Default) |

- Custom Target :
  
| Custom Target | Alternative | Description |
|----------|-------------|-------------|
| `-t [path_file]` | `--target [path_file]` | This command is used to run the application in a specific file, by default it will run the `lib/main.dart` file. |

- Custom Morpheme Yaml :

| Custom Morpheme Yaml | Description |
|----------|-------------|
| `--morpheme-yaml [path_file]` | This command is used to select yaml config the application in a specific file, by default it will run the `morpheme.yaml` file. |

## Example - Custom Version

1. Debug Version

    ```bash
    morpheme run --debug
    ```

2. Profile Version

    ```bash
    morpheme run --profile
    ```

3. Release Version

    ```bash
    morpheme run --release
    ```

## Example - Custom Environment/Flavor

1. Dev Environment

    ```bash
    morpheme run -f dev
    ```

    Alternative:

    ```bash
    morpheme run --flavor dev
    ```

2. Staging Environment

    ```bash
    morpheme run -f stag
    ```

    Alternative:

    ```bash
    morpheme run --flavor stag
    ```

3. Production Environment

    ```bash
    morpheme run -f prod
    ```

    Alternative:

    ```bash
    morpheme run --flavor prod
    ```

## Example - Version and Environment Combination

```bash
morpheme run --release -f stag
```

This following command will run your app on staging environment with release mode.

## Example - Custom Target File

```bash
morpheme run -t [url_file *optional]
```

Alternative:

```bash
morpheme run --target [url_file *optional]
```
