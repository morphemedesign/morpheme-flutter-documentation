---
sidebar_position: 9
---
# Firebase


This command sets up Firebase integration for your Flutter project by automating the `flutterfire` CLI. It supports flavor-specific configurations and CI/CD workflows using service accounts.

```bash
morpheme firebase
```

## Setup

Configure your Firebase projects in `morpheme.yaml`. Each flavor can point to a different Firebase project.

```yaml title="morpheme.yaml"
firebase:
  dev:
    project_id: "morpheme-dev"
    token: "YOUR_FIREBASE_TOKEN" # Optional: get from `firebase login:ci`
    platform: "android,ios,web"  # Optional: generate for specific platforms
    android_package_name: "design.morpheme.dev" # Optional
    ios_bundle_id: "design.morpheme.dev"        # Optional
    web_app_id: "YOUR_WEB_APP_ID"               # Optional
    
    # New: for CI/CD authentication
    service_account: "path/to/service-account.json"
    enable_ci_use_service_account: true

  prod:
    project_id: "morpheme-prod"
    # ...
```

### Authentication
- **Local Development**: The command will use your local `firebase` login credentials if no token or service account is provided.
- **CI/CD**: You can provide a `token` (generated via `firebase login:ci`) or, more securely, use a `service_account` JSON file.

## Usage

Generate configuration for the default flavor (`dev`):

```bash
morpheme firebase
```

Generate for a specific flavor:

```bash
morpheme firebase --flavor prod
```

Force overwrite existing configuration (useful if you've added new platforms):

```bash
morpheme firebase --overwrite
```

## Options

```bash
morpheme firebase [options]
```

To see all available options and flags, run `morpheme firebase --help`.

### Available Options

| Option | Abbr | Description | Default |
|---|---|---|---|
| `--flavor [flavor]` | `-f` | Select flavor (dev, stag, prod) | `dev` |
| `--overwrite` | `-o` | Force overwrite firebase configuration | `false` |
| `--morpheme-yaml [path]` | | Path to a custom configuration file. | `morpheme.yaml` |

:::caution

Ensure `flutterfire_cli` is installed:
`dart pub global activate flutterfire_cli`

Run `morpheme doctor` to check your environment.

:::
