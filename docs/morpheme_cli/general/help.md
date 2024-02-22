---
sidebar_position: 2
---

# Help

This command is used to view the list contained in the CLI.

```bash
morpheme -h
```

Alternative:

```bash
morpheme --help
```

```bash title="Output"
Morpheme CLI Boost productivity with modular project creation, API generation & folder structuring tools. Simplify Flutter dev! #Flutter #CLI

Usage: morpheme <command> [arguments]

Global options:
-h, --help       Print this usage information.
-v, --version    Reports the version of this tool.

Available commands:

Build
  build            Build an app to android or ios
  prebuild         Prepare setup ios before build

Generate
  api              Create a new api in page.
  apps             Create a new apps module.
  assets           Generate assets from setup assets pubspec.yaml.
  color2dart       Generate dart color class from yaml.
  config           Generate launch.json & tasks.json related with config.
  core             Create a new core packages module.
  endpoint         Generate endpoint from json2dart.yaml.
  feature          Create a new feature module.
  firebase         Generate google service both android & ios.
  json2dart        Generate dart data class from json.
  l10n             Generate localizations for the current project.
  local2dart       Generate sqlite yaml to dart sqlite class helper
  page             Create a new page in feature module.
  remove-apps      Remove code apps.
  remove-feature   Remove code feature.
  remove-page      Remove code page in spesific feature.

Project
  analyze          Analyze code in all packages.
  clean            Delete the l10n, build/ and .dart_tool/ in main, core & features directories.
  coverage         Run Flutter test coverage for the current project & all modules.
  create           Create flutter application with Morpheme Flutter Starter Kit
  cucumber         Generate integration test from gherkin in .feature
  format           Format all files .dart.
  get              Get packages in a Flutter project, Core & Features.
  refactor         Refactor naming old to new naming
  run              Run your Flutter app on an attached device with flavor.
  test             Run Flutter unit tests for the current project & all modules.
  unused-l10n      Unused l10n all files .dart.
  upgrade          Upgrade the current package's dependencies to latest versions..

Tools
  changelog        get latest changelog
  doctor           Show information about the installed tooling.
  init             Init a new project from starter kit

Run "morpheme help <command>" for more information about a command.
```
