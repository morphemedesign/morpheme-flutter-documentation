---
sidebar_position: 15
---

# Remove Test

This command allows you to clean up generated test helper files, specifically `bundle_test.dart` and `coverage_helper_test.dart`. It can target the entire project, specific apps, features, or pages.

```bash
morpheme remove-test [options]
```

## Description

The `remove-test` command is a utility for removing generated test auxiliaries. It does **not** remove your actual unit tests or widget tests. It specifically targets:
*   `bundle_test.dart`: Generated files typically used for asset testing or creating test bundles.
*   `coverage_helper_test.dart`: Helper files used for aggregating coverage data.

You might run this to clean up artifacts before a clean build or if you want to regenerate these helpers from scratch.

## Usage

### Remove All Test Helpers
Removes all `bundle_test.dart` and `coverage_helper_test.dart` files in the current working directory (recursively).
```bash
morpheme remove-test
```

### Remove for an App
Removes test helpers only within a specific app module.
```bash
morpheme remove-test -a driver
```

### Remove for a Feature
Removes test helpers within a specific feature.
```bash
morpheme remove-test -f auth
```
*Note: If you have a monorepo with apps, you can combine this with `-a` to target a feature inside an app.*

### Remove for a Page
Removes test helpers matching a specific page.
```bash
morpheme remove-test -f auth -p login
```

## Options

```bash
morpheme remove-test [options]
```

To see all available options and flags, run `morpheme remove-test --help`.

### Available Options

| Option | Abbr | Description |
|---|---|---|
| `--apps-name` | `-a` | Target a specific app. |
| `--feature` | `-f` | Target a specific feature. |
| `--page` | `-p` | Target a specific page. |

:::info Safe Operation
This command only removes specific helper files (`bundle_test.dart` and `coverage_helper_test.dart`). It will **not** delete your `*_test.dart` files containing your functional logic.
:::
