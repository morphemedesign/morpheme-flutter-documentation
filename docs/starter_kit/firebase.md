---
sidebar_position: 13
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
