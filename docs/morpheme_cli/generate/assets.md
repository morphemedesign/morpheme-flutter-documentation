---
sidebar_position: 7
---
# Assets

This command generates type-safe Dart constants for your assets defined in `pubspec.yaml` and scans for flavor-specific assets. It simplifies asset usage by providing autocomplete-ready classes, eliminating the need for hardcoded string paths.

```bash
morpheme assets
```

## Features

- **Type-Safe Access**: Access assets via static constants (e.g., `MorphemeImages.logo`).
- **Flavor Support**: Manage flavor-specific assets easily by merging flavor assets with main assets.
- **Automatic Formatting**: Generated code is automatically formatted using `dart format`.
- **Library Generation**: Creates export files (`assets.dart`) for easy importing across your project.

## Directory Structure

By default, the command expects the following structure, often organized within an `assets` module:

```
.
├── assets/
│   ├── assets/              # Source assets (images, icons, json)
│   │   ├── images/
│   │   ├── icons/
│   │   └── json/
│   ├── flavor/              # Flavor-specific assets
│   │   ├── dev/
│   │   └── prod/
│   ├── lib/                 # Output directory for generated code
│   └── pubspec.yaml         # Defines the assets
├── morpheme.yaml            # Configuration file
```

## Usage Example

1.  **Add Assets**: Place your asset files in the configured asset directories.
2.  **Define in pubspec.yaml**: Ensure your assets are declared in your `assets/pubspec.yaml`.
3.  **Run Command**:

    ```bash
    morpheme assets
    ```

4.  **Use in Code**:

    ```dart
    import 'package:assets/assets.dart';

    Image.asset(MorphemeImages.logo);
    ```

:::info
By default:
- Images in `assets/assets/images/` -> `MorphemeImages` class.
- Icons in `assets/assets/icons/` -> `MorphemeIcons` class.
- JSONs in `assets/assets/json/` -> `MorphemeJson` class.
:::

## Configuration

You can customize the directory structure in `morpheme.yaml`. If not specified, the command uses the defaults shown below.

```yaml title="morpheme.yaml"
assets:
  pubspec_dir: assets          # Directory containing pubspec.yaml
  output_dir: assets/lib       # Output for generated Dart files
  assets_dir: assets/assets    # Root directory of source assets
  flavor_dir: assets/flavor    # Directory for flavor-specific assets
  create_library_file: true    # Generate a root export file
```

## Options

```bash
morpheme assets [options]
```

To see all available options and flags, run `morpheme assets --help`.

### Available Options

| Option | Description |
|---|---|
| `--flavor [flavor]` | Generate assets for a specific flavor (e.g., `dev`, `prod`). Merges base assets with flavor-specific ones. |
| `--morpheme-yaml [path]` | Path to a custom configuration file (default: `morpheme.yaml`). |

## Examples

**Standard Generation:**

```bash
morpheme assets
```

**Flavor-Specific Generation:**

This looks for assets in `assets/flavor/dev/` and merges them with the base assets.

```bash
morpheme assets --flavor dev
```

## Troubleshooting

If you encounter issues during generation:

- **Check morpheme.yaml**: Ensure you have an `assets` section if using custom paths.
- **Verify pubspec.yaml**: Make sure your `pubspec.yaml` has valid asset paths listed under `flutter: assets:`.
- **Check Paths**: Ensure all directories defined in your config exist and are readable.
- **Run Doctor**: Use `morpheme doctor` to check your environment setup.
