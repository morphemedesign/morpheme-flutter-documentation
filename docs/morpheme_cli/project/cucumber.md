---
sidebar_position: 11
---

# Cucumber

This command to execute integration test just support for implemented dependency [Morpheme Cucumber](https://pub.dev/packages/morpheme_cucumber) which this package builds on top of `patrol` and `integration_test` to make it easy to integration test with gherkin language. For more info about Morpheme Cucumber you can follow on [Documentation](https://pub.dev/packages/morpheme_cucumber).

## Installation

Requirement

1. Install [Flutter](https://docs.flutter.dev/get-started/install) and another installation e.g Android Studio, Xcode. you can check in this command:

    ```sh
    flutter doctor
    ```

2. After install Flutter then install morpheme_cli with command:

    ```sh
    dart pub global activate morpheme_cli
    ```

    now you can run this command to check:

    ```sh
    morpheme_cli doctor
    ```

    If this directory is missing from your PATH, locate the file for your platform and add it.

    | Platform       | Cache location               |
    |----------------|------------------------------|
    | macOS or Linux | HOME/.pub-cache/bin          |
    | Windows*       | %LOCALAPPDATA%\Pub\Cache\bin |

3. Install gherkin executable and make sure to export to your PATH from this [Gherkin Executable](https://github.com/morphemedesign/morpheme-flutter-cli/releases/tag/cucumber)
4. Install nodejs for generate cucumber json to report html [NodeJs](https://nodejs.org/en/download/)

Congratulation now you are ready for Instant Integration Test 🎉🎉🎉

## How to Run

First connect your device to your machine or open emulator / simulator

Install dependency with command:

```sh
morpheme_cli get
```

Once your done installation, then run command:

```sh
morpheme_cli cucumber
```

or your need to be specific feature you can do run command:

```sh
morpheme_cli cucumber login
```

or multiple

```sh
morpheme_cli cucumber login,register,home
```

by default run `integration_test/cucumber_test.dart` by flavor dev. if you want to running flavor stag or prod just add argument `--flavor stag` or `--flavor prod`

example run flavor stag

```sh
morpheme_cli cucumber --flavor stag
```

## Options

```bash
morpheme cucumber [arguments]
```

To see all available options and flags, run `morpheme cucumber --help`.

### Available Options

- Custom Morpheme Yaml :

| Custom Morpheme Yaml | Description |
|----------|-------------|
| `--morpheme-yaml [path_file]` | This command is used to select yaml config the application in a specific file, by default it will run the `morpheme.yaml` file. |

- Flavor/Environment :  
  
| Flavor/Environment | Alternative | Description |
|----------|-------------|-------------|
| `-f dev` | `--flavor dev` | Run project on dev environment (Default) |
| `-f stag` | `--flavor stag` | Run project on staging environment|
| `-f prod` | `--flavor prod` | Run project on production environment |

- Generate l10n :  
  
| Generate l10n | Description |
|----------|-------------|-------------|
| `--[no]l10n` | Generate l10n first before running other command. (defaults to on) |
