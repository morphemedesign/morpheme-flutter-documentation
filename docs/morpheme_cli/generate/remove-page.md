---
sidebar_position: 14
---

# Remove Page

This command allows you to safely remove a specific page (module) from a feature. It deletes the page's directory, its associated tests, and removes its registration from the dependency injection container.

```bash
morpheme remove-page [page_name] -f [feature_name]
```

## Description

When you run this command, the CLI performs the following actions:
1.  **Deletes Directory**: Removes the page directory `features/[feature_name]/lib/[page_name]`.
2.  **Deletes Tests**: Removes the associated test directory `features/[feature_name]/test/[page_name]_test`.
3.  **Updates Locator**: Deregisters the page's dependencies from `features/[feature_name]/lib/locator.dart`.
4.  **Format**: Runs `dart format` to clean up the code.

## Usage

### Remove a Page from a Standard Feature

To remove a page named `login` from the `auth` feature:

```bash
morpheme remove-page login -f auth
```

### Remove a Page from an App-Specific Feature

To remove a page named `dashboard` from the `home` feature inside the `driver` app:

```bash
morpheme remove-page dashboard -f home -a driver
```

## Options

```bash
morpheme remove-page [page_name] [options]
```

To see all available options and flags, run `morpheme remove-page --help`.

### Available Options

| Option | Abbr | Description | Mandatory |
|---|---|---|---|
| `--feature-name` | `-f` | Name of the feature containing the page to remove. | **Yes** |
| `--apps-name` | `-a` | Name of the app containing the feature (for monorepo setup). | No |

:::warning Irreversible Action
This command permanently deletes the page directory and its tests. Ensure you have backed up your code or committed changes to version control before running this command.
:::
