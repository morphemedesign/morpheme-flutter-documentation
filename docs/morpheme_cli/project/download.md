---
sidebar_position: 13
---

# Download

This command automates the downloading of external resources defined in your `morpheme.yaml`. It is useful for fetching assets, documentation, or other dependencies that are not managed by `pub`.

```bash
morpheme download
```

## Configuration

Add a `download` section to your `morpheme.yaml` file to define resources.

```yaml
download:
  # Download and extract a ZIP file
  icons:
    url: "https://example.com/icons.zip"
    dir: "assets/icons"
    compressed: true

  # Download a single file
  data_schema:
    url: "https://api.example.com/schema.json"
    dir: "assets/json"
    compressed: false
```

-   **url**: The direct link to the file.
-   **dir**: The local directory where the file should be saved.
-   **compressed**: Set to `true` to automatically unzip/extract the file and delete the archive.

## Usage

### Download All Resources
Process all items defined in the `download` configuration.

```bash
morpheme download
```

### Custom Configuration
Use a different configuration file.

```bash
morpheme download --morpheme-yaml other_config.yaml
```

## Options

```bash
morpheme download [options]
```

To see all available options and flags, run `morpheme download --help`.

### Available Options

| Option | Description |
|---|---|
| `--morpheme-yaml [path]` | Path to a custom configuration file (default: `morpheme.yaml`). |
