---
sidebar_position: 9
---

# Firebase

This command is used to generate firebase configuration used cli `flutterfire` which recommendation from [firebase reference](https://firebase.google.com/docs/flutter/setup?platform=ios) for flutter.

## Setup

In firebase have flavor and each flavor can be different project setup.

```morpheme.yaml title="morpheme.yaml"
...
firebase:
  dev: #flavor
    project_id: "morpheme-dev"
    token: "YOUR FIREBASE TOKEN: firebase login:ci"
    platform: "android,ios,web" #optional
    android_package_name: "design.morpheme.dev" #optional by default use from flavor[ANDROID_APPLICATION_ID]
    ios_bundle_id: "design.morpheme.dev" #optional by default use from flavor[IOS_APPLICATION_ID]
    web_app_id: "YOUR WEB APP ID" #optional
  stag:
    project_id: "morpheme-stag"
    token: "YOUR FIREBASE TOKEN: firebase login:ci"
  prod:
    project_id: "morpheme"
    token: "YOUR FIREBASE TOKEN: firebase login:ci"
    platform: "android,ios"
...
```

for token you need to get from [firebase_cli](https://firebase.google.com/docs/cli) you need install that and run `firebase login:ci` to get token.

## Command

```bash
morpheme firebase -f [flavor]
```

:::caution
Ensure you already to install `flutterfire` or you can check with `moprpheme doctor` to see requirement you dont already installed. you can install `flutterfire` with `dart pub global activate flutterfire`.
:::

## Options

```bash
morpheme firebase [arguments]
```

To see all available options and flags, run `morpheme firebase --help`.

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
