# Upgrade Dependency

This command upgrades the dependencies in your project to their latest compatible versions. It helps keep your project up-to-date with security patches and new features.

```bash
morpheme upgrade-dependency
```

## Description

The `upgrade-dependency` command simplifies the process of running `flutter pub upgrade` across your modular project. It supports three modes:
1.  **Morpheme Library** (Default): Upgrades dependencies in `core/packages/morpheme_library`.
2.  **Dependency Manager**: Upgrades dependencies in `core/packages/dependency_manager`.
3.  **All Packages**: Recursively upgrades dependencies in all apps, core packages, and features.

## Usage

### Upgrade Morpheme Library (Default)
Updates dependencies for the core Morpheme library package.

```bash
morpheme upgrade-dependency
# OR explicitly
morpheme upgrade-dependency --morpheme
```

### Upgrade Dependency Manager
Updates dependencies for the shared dependency manager package.

```bash
morpheme upgrade-dependency --dependency
```

### Upgrade All Packages
Recursively runs `flutter pub upgrade` in every package of the project (apps, core, features).

```bash
morpheme upgrade-dependency --all
```

## Options

```bash
morpheme upgrade-dependency [options]
```

To see all available options and flags, run `morpheme upgrade-dependency --help`.

### Available Options

| Option | Abbr | Description |
|---|---|---|
| `--all` | `-a` | Upgrade dependencies in **all** project packages. |
| `--dependency` | `-d` | Upgrade dependencies in `dependency_manager`. |
| `--morpheme` | `-g` | Upgrade dependencies in `morpheme_library` (Default). |
| `--skip-confirmation` | | Skip the confirmation prompt. |
| `--morpheme-yaml [path]` | | Path to a custom configuration file. |

:::caution
Upgrading dependencies can introduce breaking changes. It is strongly recommended to:
1.  Commit your changes before running this command.
2.  Run `morpheme test` immediately after upgrading to verify compatibility.
:::
