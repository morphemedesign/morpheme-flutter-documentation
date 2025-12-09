---
sidebar_position: 13
---

# Remove Feature

This command allows you to safely remove a feature module from your project. It automates the deletion of the directory and cleans up all related configurations to ensure the project remains buildable.

```bash
morpheme remove-feature [feature_name]
```

## Description

When you run this command, the CLI performs the following actions:
1.  **Deletes Directory**: Removes the `features/[feature_name]` directory.
2.  **Updates Locator**: Removes the feature's dependency injection registration from `lib/locator.dart`.
3.  **Clean Pubspec**: Removes the feature module from the main `pubspec.yaml` dependencies.
4.  **Format**: Runs `dart format` to clean up the code.

## Usage

### Remove a Standard Feature

To remove a feature named `profile`:

```bash
morpheme remove-feature profile
```

### Remove an App-Specific Feature

If you are using a monorepo structure with multiple apps, you can remove a feature from a specific app:

```bash
morpheme remove-feature profile -a my_app
```

## Options

```bash
morpheme remove-feature [feature_name] [options]
```

To see all available options and flags, run `morpheme remove-feature --help`.

### Available Options

| Option | Abbr | Description |
|---|---|---|
| `--apps-name` | `-a` | The name of the app containing the feature to remove (for monorepo setup). |

:::warning Irreversible Action
This command permanently deletes the feature directory. Ensure you have backed up your code or committed changes to version control before running this command.
:::
