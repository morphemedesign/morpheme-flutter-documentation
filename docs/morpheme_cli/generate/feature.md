---
sidebar_position: 2
---
# Feature


This command generates a new feature module, which is an independent package where you can build your application features. It handles the creation of the module structure and automatically registers it with the main application.

```bash
morpheme feature [feature_name]
```

## Generated Structure

The command creates the following structure for a feature named `profile`:
- `features/profile/`
  - `pubspec.yaml`: Defines the feature's dependencies.
  - `analysis_options.yaml`: Linting rules.
  - `lib/locator.dart`: Dependency injection setup for the feature.
  - `test/`: Test directory.

It also automatically:
- Updates the main `pubspec.yaml` to include the new feature.
- Registers the feature in the main `locator.dart`.

## Options

```bash
morpheme feature [feature_name] [options]
```

To see all available options and flags, run `morpheme feature --help`.

### Available Options

| Option | Abbr | Description | Default |
|---|---|---|---|
| `--apps-name [name]` | `-a` | Create the feature module within a specific app (e.g., inside `apps/my_app/features/`). | |

## Examples

**Standard Feature:**
Generate a `master` feature in the root `features/` directory.

```bash
morpheme feature master
```

**Feature inside an App:**
Generate a `dashboard` feature specifically for the `driver` app.

```bash
morpheme feature dashboard --apps-name driver
```
