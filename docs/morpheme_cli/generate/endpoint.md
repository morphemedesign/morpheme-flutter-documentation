---
sidebar_position: 6
---
# Endpoint


This command generates a centralized `MorphemeEndpoints` class based on endpoint definitions found in `json2dart.yaml` files across your features. It facilitates easy access to API URIs throughout your application.

```bash
morpheme endpoint
```

## Description
The command scans all `json2dart.yaml` files in your project's features and aggregates them into a single file located at:

`core/lib/src/data/remote/morpheme_endpoints.dart`

This file contains static properties and methods to access your API endpoints, automatically handling path parameters.

## Example Generated Code

```dart
abstract class MorphemeEndpoints {
  static Uri _createUriBASE_URL(String path) => Uri.parse(const String.fromEnvironment('BASE_URL') + path);

  static Uri login = _createUriBASE_URL('/auth/login');
  static Uri getUserProfile(String id) => _createUriBASE_URL('/users/$id');
}
```

## Options

```bash
morpheme endpoint [options]
```

To see all available options and flags, run `morpheme endpoint --help`.

### Available Options

| Option | Description |
|---|---|
| `--morpheme-yaml [path]` | Path to a custom configuration file (default: `morpheme.yaml`). |

## Examples

**Standard Generation:**

```bash
morpheme endpoint
```
