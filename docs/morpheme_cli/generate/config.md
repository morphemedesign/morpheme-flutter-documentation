---
sidebar_position: 1
---
# Config


This command generates IDE run configurations for **VS Code** and **Android Studio** based on the `morpheme.yaml` configuration. It sets up launch configurations for all defined flavors (Debug, Profile, Release) and integrates pre-launch tasks.

```bash
morpheme config
```

## Supported IDEs

### VS Code
Generates:
- `.vscode/launch.json`: Launch configurations for each flavor and mode.
- `.vscode/tasks.json`: Build tasks and pre-launch scripts (e.g., `morpheme firebase`).

### Android Studio
Generates:
- `.idea/runConfigurations/*.xml`: Individual run configuration files for each flavor and mode.
- Includes pre-launch tasks to handle flavor-specific setup automatically.

## Generated Configuration
For each flavor defined in `morpheme.yaml`, the command creates 3 configurations:
- **Debug**: standard `flutter run --debug`
- **Profile**: `flutter run --profile`
- **Release**: `flutter run --release`

![File generated](../../../static/img/generate/config/file_generated.png)

## Options

```bash
morpheme config [options]
```

To see all available options and flags, run `morpheme config --help`.

### Available Options

| Option | Abbr | Description | Default |
|---|---|---|---|
| `--target [path]` | `-t` | Path to the main entry point file. | `lib/main.dart` |
| `--morpheme-yaml [path]` | | Path to a custom configuration file. | `morpheme.yaml` |

## Examples

**Standard Config:**
```bash
morpheme config
```

**Custom Entry Point:**
```bash
morpheme config -t lib/main_dev.dart
```
