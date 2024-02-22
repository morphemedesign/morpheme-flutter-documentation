---
sidebar_position: 2
---

# Getting Started

## Requirement

- Dart SDK 3.2 - latest
- Flutter: 3.16.0 - latest

:::note

- Dart SDK Installation **[Dart SDK](https://dart.dev/get-dart)**
- Flutter SDK Installation **[Flutter SDK](https://docs.flutter.dev/development/tools/sdk/releases?tab=macos)**

:::

## Installation

1. Install [Morpheme CLI](../morpheme_cli/started)
2. Create new project with run command:

    ```bash
    morpheme create my-app
    ```

    To see all available options and flags, run `morpheme create --help` or check in [here](../morpheme_cli/project/create).
3. Run your emulator or connect your device
4. Now you can run apps in VS Code with press `F5` or you can run via terminal with command:

     ```bash
    morpheme run
    ```

    To see all available options and flags, run `morpheme run --help` or check in [here](../morpheme_cli/project/run).

:::info

If you want install manually you need to follow this step:

1. Clone source this from repository **[Morpheme Flutter Starter Kit](https://github.com/morphemedesign/morpheme-flutter)**

    ```bash
    # via SSH

    git clone git@github.com:morphemedesign/morpheme-flutter.git

    # via HTTPS

    git clone https://github.com/morphemedesign/morpheme-flutter.git
    ```

2. Remove the `.git` folder and initialize the new one.

    ```bash
    cd my-app
    rm -rf .git 
    git init
    git commit -am "initial commit"
    ```

3. Init configuration

    ```bash
    morpheme init
    morpheme config
    ```

4. Install the dependencies

    ```bash
    morpheme get
    ```

5. Run your emulator or connect your device
6. Now you can run apps in VS Code with press `F5` or you can run via terminal with command:

     ```bash
    morpheme run
    ```

    To see all available options and flags, run `morpheme run --help` or check in [here](../morpheme_cli/project/run).

:::
