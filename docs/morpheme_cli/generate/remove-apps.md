---
sidebar_position: 13
---

# Remove Apps

This command allows you to safely remove an entire app module from your project. It automates the deletion of the directory and cleans up all related configurations to ensure the project remains buildable.

```bash
morpheme remove-apps [apps_name]
```

## Description

When you run this command, the CLI performs the following actions:
1.  **Deletes Directory**: Removes the `apps/[apps_name]` directory.
2.  **Updates Locator**: Removes the app's dependency injection registration from `lib/locator.dart`.
3.  **Clean Pubspec**: Removes the app module from the main `pubspec.yaml` dependencies.
4.  **Format**: Runs `dart format` to clean up the code.

## Usage

To remove an app named `driver`:

```bash
morpheme remove-apps driver
```

:::warning Irreversible Action

This command permanently deletes the app directory. Ensure you have backed up your code or committed changes to version control before running this command.

:::
